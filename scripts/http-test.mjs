import http from 'http';
import { spawn } from 'child_process';
import fs from 'fs';

const TEST_PORT = 3009;
const BASE_URL = `http://localhost:${TEST_PORT}`;

// Extract all routes from sitemap.ts
const coreRoutes = [
  '/',
  '/about',
  '/quality',
  '/contact',
  '/products',
  '/therapeutic-areas',
  '/healthcare-professionals',
  '/business-enquiry',
  '/health',
  '/insights',
  '/search',
  '/sitemap',
  '/disclaimer',
  '/privacy',
  '/terms',
  '/robots.txt',
  '/sitemap.xml',
  '/llms.txt',
  '/llms-full.txt'
];

// Read siteData for dynamic slugs
const siteData = fs.readFileSync('src/data/siteData.ts', 'utf8');

const productSlugs = [...siteData.matchAll(/id:\s*["'][^"']+["'],\s*slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const therapySlugs = [
  'neurology-neuropathic-pain',
  'orthopedics-musculoskeletal',
  'bone-health-minerals',
  'gastroenterology',
  'respiratory-pulmonology',
  'anti-infectives-urology',
  'obstetrics-gynecology',
  'immunology-rheumatology',
  'dermatology',
  'nutraceuticals-wellness'
];
const healthSlugs = [
  'neuropathic-pain-management',
  'osteoarthritis-joint-inflammation',
  'gerd-acid-reflux',
  'urinary-tract-infections'
];
const insightSlugs = [
  'advancing-aseptic-injectable-standards',
  'navigating-polymorphism-bioavailability',
  'strengthening-hospital-supply-chains'
];

const allUrls = [
  ...coreRoutes,
  ...therapySlugs.map(s => `/therapeutic-areas/${s}`),
  ...productSlugs.map(s => `/products/${s}`),
  ...healthSlugs.map(s => `/health/${s}`),
  ...insightSlugs.map(s => `/insights/${s}`),
  // Also test redirects
  '/privacy-policy',
  '/terms-and-conditions',
  '/medical-information-disclaimer',
  '/about/our-story',
  '/about/leadership',
  '/quality/standards',
  // And 404 test
  '/non-existent-broken-page'
];

function fetchUrl(urlPath) {
  return new Promise((resolve) => {
    const fullUrl = `${BASE_URL}${urlPath}`;
    const startTime = Date.now();
    const req = http.get(fullUrl, { headers: { 'Accept': 'text/html,application/xhtml+xml,application/xml' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path: urlPath,
          statusCode: res.statusCode,
          durationMs: Date.now() - startTime,
          location: res.headers['location'],
          contentType: res.headers['content-type'],
          bodyLength: data.length,
          hasErrorText: data.includes('Application error') || data.includes('Unhandled Runtime Error')
        });
      });
    });
    req.on('error', (err) => {
      resolve({
        path: urlPath,
        statusCode: 0,
        error: err.message,
        durationMs: Date.now() - startTime
      });
    });
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        path: urlPath,
        statusCode: 408,
        error: 'Timeout',
        durationMs: Date.now() - startTime
      });
    });
  });
}

async function run() {
  console.log(`Starting Next.js server on port ${TEST_PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(TEST_PORT)], {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  server.stdout.on('data', (d) => {
    const msg = d.toString();
    if (msg.includes('Ready') || msg.includes('localhost:')) {
      ready = true;
    }
  });

  let ready = false;
  // Wait up to 10s for server to start
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 500));
    try {
      const test = await fetchUrl('/');
      if (test.statusCode === 200) {
        ready = true;
        break;
      }
    } catch {}
  }

  if (!ready) {
    console.error('Failed to start test server within 10s.');
    server.kill();
    process.exit(1);
  }

  console.log(`Server ready! Testing ${allUrls.length} URLs...\n`);

  let passed = 0;
  let failed = 0;
  const failures = [];

  for (const urlPath of allUrls) {
    const res = await fetchUrl(urlPath);
    const isRedirectExpected = [
      '/privacy-policy',
      '/terms-and-conditions',
      '/medical-information-disclaimer',
      '/about/our-story',
      '/about/leadership',
      '/quality/standards'
    ].includes(urlPath);

    const is404Expected = urlPath === '/non-existent-broken-page';

    let ok = false;
    if (isRedirectExpected) {
      ok = (res.statusCode === 307 || res.statusCode === 308 || res.statusCode === 301);
    } else if (is404Expected) {
      ok = (res.statusCode === 404);
    } else {
      ok = (res.statusCode === 200 && !res.hasErrorText);
    }

    if (ok) {
      passed++;
      console.log(`✓ [${res.statusCode}] ${urlPath} (${res.durationMs}ms, ${res.bodyLength} bytes)`);
    } else {
      failed++;
      console.log(`✗ [${res.statusCode}] ${urlPath} - FAILED! Error: ${res.error || res.hasErrorText ? 'Error text in body' : 'Unexpected status code'}`);
      failures.push({ path: urlPath, status: res.statusCode, location: res.location, error: res.error });
    }
  }

  console.log(`\n========================================`);
  console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED across ${allUrls.length} URLs.`);
  console.log(`========================================\n`);

  server.kill('SIGTERM');
  if (failed > 0) {
    console.error('Failures:', failures);
    process.exit(1);
  } else {
    process.exit(0);
  }
}

run();
