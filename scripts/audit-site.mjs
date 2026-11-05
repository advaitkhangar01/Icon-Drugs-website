import fs from 'fs';
import path from 'path';

console.log("=== 1. CHECKING PUBLIC ASSETS ===");
const publicFiles = new Set();
function walkDir(dir, prefix = '') {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      walkDir(path.join(dir, item.name), prefix + '/' + item.name);
    } else {
      publicFiles.add((prefix + '/' + item.name).toLowerCase());
    }
  }
}
walkDir('public');
console.log(`Indexed ${publicFiles.size} files in /public.`);

// Check all image references in src
console.log("\n=== 2. CHECKING ALL IMAGE REFERENCES IN SRC ===");
const imgRegex = /["'`]((\/[a-zA-Z0-9_\-\.\/]+)\.(png|jpg|jpeg|svg|webp|ico|gif))["'`]/gi;

let totalImageRefs = 0;
const missingImages = new Map();

function scanSourceFiles(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name === 'node_modules' || item.name === '.next' || item.name === '.git') continue;
      scanSourceFiles(fullPath);
    } else if (/\.(tsx|ts|jsx|js)$/.test(item.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      let match;
      while ((match = imgRegex.exec(content)) !== null) {
        totalImageRefs++;
        const imgPath = match[1];
        // Skip next.js internal or external
        if (!imgPath.startsWith('/')) continue;
        if (!publicFiles.has(imgPath.toLowerCase())) {
          if (!missingImages.has(imgPath)) {
            missingImages.set(imgPath, []);
          }
          missingImages.get(imgPath).push(path.relative(process.cwd(), fullPath));
        }
      }
    }
  }
}

scanSourceFiles('src');
console.log(`Scanned ${totalImageRefs} image references across src/`);
if (missingImages.size === 0) {
  console.log("SUCCESS: All referenced images exist in public/!");
} else {
  console.log(`WARNING: Found ${missingImages.size} missing image paths:`);
  for (const [img, files] of missingImages.entries()) {
    console.log(`  - ${img} (referenced in: ${files.join(', ')})`);
  }
}

console.log("\n=== 3. CHECKING INTERNAL ROUTE LINKS ===");
// List of all valid static routes
const validRoutes = new Set([
  '/',
  '/about',
  '/quality',
  '/contact',
  '/products',
  '/therapeutic-areas',
  '/health',
  '/healthcare-professionals',
  '/insights',
  '/business-enquiry',
  '/search',
  '/sitemap',
  '/sitemap.xml',
  '/robots.txt',
  '/llms.txt',
  '/llms-full.txt',
  '/privacy',
  '/terms',
  '/disclaimer'
]);

// Read data to add dynamic slugs
const siteDataContent = fs.readFileSync('src/data/siteData.ts', 'utf8');

// Extract products
const prodSlugMatches = siteDataContent.matchAll(/slug:\s*["']([^"']+)["']/g);
for (const match of prodSlugMatches) {
  const slug = match[1];
  // Check if it's therapeutic area, product, health condition, or insight
  validRoutes.add(`/products/${slug}`);
  validRoutes.add(`/therapeutic-areas/${slug}`);
  validRoutes.add(`/health/${slug}`);
  validRoutes.add(`/insights/${slug}`);
}

const linkRegex = /href=["'](\/[^"'#?]*)/g;
const missingRoutes = new Map();
let totalLinks = 0;

function scanLinks(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name === 'node_modules' || item.name === '.next' || item.name === '.git') continue;
      scanLinks(fullPath);
    } else if (/\.(tsx|ts|jsx|js)$/.test(item.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        totalLinks++;
        let route = match[1];
        if (route.endsWith('/') && route.length > 1) {
          route = route.slice(0, -1);
        }
        if (!validRoutes.has(route) && !route.startsWith('/_next') && !route.startsWith('/api')) {
          if (!missingRoutes.has(route)) {
            missingRoutes.set(route, []);
          }
          missingRoutes.get(route).push(path.relative(process.cwd(), fullPath));
        }
      }
    }
  }
}

scanLinks('src');
console.log(`Scanned ${totalLinks} internal link references.`);
if (missingRoutes.size === 0) {
  console.log("SUCCESS: All internal links point to valid canonical routes!");
} else {
  console.log(`WARNING: Found ${missingRoutes.size} unverified routes:`);
  for (const [route, files] of missingRoutes.entries()) {
    console.log(`  - ${route} (in: ${files.slice(0, 3).join(', ')}${files.length > 3 ? '...' : ''})`);
  }
}
