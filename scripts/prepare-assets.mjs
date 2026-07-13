import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
const redirectsPath = path.join(dist, '_redirects');

// Always overwrite — never allow absolute URL rules into Workers assets.
// Cloudflare error 100324: "Only relative URLs are allowed"
const SAFE = `/index.html / 301\n`;

fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(redirectsPath, SAFE);

// Force at least one new asset hash every build so stale Cloudflare asset
// bundles (with old absolute _redirects) get replaced on upload.
fs.writeFileSync(
  path.join(dist, '_deploy-stamp.txt'),
  `sandcheats-deploy ${new Date().toISOString()}\n`
);

const text = fs.readFileSync(redirectsPath, 'utf8');
if (/https?:\/\//i.test(text)) {
  console.error('FATAL: _redirects still contains absolute URLs');
  process.exit(1);
}

console.log('Asset redirects locked to relative-only:', JSON.stringify(text.trim()));
console.log('Deploy stamp written to force Cloudflare asset upload');
