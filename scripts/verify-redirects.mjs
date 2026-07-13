import fs from 'fs';
import path from 'path';
import process from 'process';

const file = path.resolve('dist/_redirects');
if (!fs.existsSync(file)) {
  console.error('FAIL: dist/_redirects missing — Cloudflare may keep a stale invalid copy');
  process.exit(1);
}

const text = fs.readFileSync(file, 'utf8');
if (/https?:\/\//i.test(text)) {
  console.error('FAIL: dist/_redirects contains absolute URLs (Cloudflare Workers rejects them)');
  console.error(text);
  process.exit(1);
}

const rules = text
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

for (const rule of rules) {
  const parts = rule.split(/\s+/);
  if (parts.length < 2) {
    console.error(`FAIL: bad redirect rule: ${rule}`);
    process.exit(1);
  }
  if (!parts[0].startsWith('/') || !parts[1].startsWith('/')) {
    console.error(`FAIL: redirect paths must be relative: ${rule}`);
    process.exit(1);
  }
}

console.log('Redirects OK:', rules.join(' | ') || '(none)');
