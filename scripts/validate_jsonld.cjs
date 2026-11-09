const fs = require('fs');
const path = require('path');

let schemaCount = 0;
let fileCount = 0;

function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (f.endsWith('.html')) {
      fileCount++;
      const content = fs.readFileSync(full, 'utf8');
      const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        schemaCount++;
        try {
          const parsed = JSON.parse(match[1]);
          if (!parsed['@context']) {
            console.warn(`Warning: Missing @context in ${full}`);
          }
        } catch (err) {
          console.error(`ERROR: JSON parse failed in ${full}:`, err.message);
          process.exit(1);
        }
      }
    }
  }
}

scan('.next/server/app');
console.log(`SUCCESS: Scanned ${fileCount} HTML files, validated ${schemaCount} JSON-LD schemas with zero parse errors!`);
