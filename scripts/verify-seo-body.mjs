import fs from 'fs';
import process from 'process';

const h = fs.readFileSync('dist/index.html', 'utf8');
const firstScript = h.indexOf('<script');
const seo = h.indexOf('id="seo-landmarks"');
const headEnd = h.indexOf('</head>');
const head = h.slice(0, headEnd);
const beforeFirstScript = h.slice(0, firstScript);

const checks = {
  seoBeforeFirstScript: seo > -1 && seo < firstScript,
  scriptsInHead: (head.match(/<script/gi) || []).length,
  h1: (beforeFirstScript.match(/<h1[\s>]/g) || []).length,
  h2: (beforeFirstScript.match(/<h2[\s>]/g) || []).length,
  p: (beforeFirstScript.match(/<p[\s>]/g) || []).length,
  strong: (beforeFirstScript.match(/<strong[\s>]/g) || []).length,
  img: (beforeFirstScript.match(/<img[\s]/g) || []).length,
  internal: (beforeFirstScript.match(/href="\//g) || []).length,
  external: (beforeFirstScript.match(/href="https:/g) || []).length,
};

console.log(JSON.stringify(checks, null, 2));

const headers = fs.readFileSync('dist/_headers', 'utf8');
const requiredHeaders = [
  'Strict-Transport-Security',
  'Content-Security-Policy',
  'X-Content-Type-Options',
  'X-Frame-Options',
  'Referrer-Policy',
  'Permissions-Policy',
];
for (const key of requiredHeaders) {
  if (!headers.includes(key)) {
    console.error(`Missing header in dist/_headers: ${key}`);
    process.exit(1);
  }
}

if (!checks.seoBeforeFirstScript || checks.scriptsInHead > 0) {
  console.error('FAIL: <script> appears before #seo-landmarks (or still in <head>)');
  process.exit(1);
}
if (checks.h1 < 1 || checks.h2 < 1 || checks.p < 1 || checks.img < 1) {
  console.error('FAIL: missing headings/paragraphs/images before first <script>');
  process.exit(1);
}
if (checks.internal < 5 || checks.external < 3) {
  console.error('FAIL: missing internal/external links before first <script>');
  process.exit(1);
}

console.log('SEO body order OK');
