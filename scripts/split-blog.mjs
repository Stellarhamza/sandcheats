import fs from 'fs';

const src = fs.readFileSync('d:/downloads/sand raiders of sophie/src/pages/Blog.tsx', 'utf8');
const posts = [];
const re =
  /\{\s*slug:\s*'([^']+)',\s*title:\s*'((?:\\'|[^'])*)',\s*category:\s*'([^']+)',\s*date:\s*'([^']+)',\s*readTime:\s*'([^']+)',\s*image:\s*'([^']+)',\s*excerpt:\s*\n?\s*'((?:\\'|[^'])*)',\s*body:\s*`([\s\S]*?)`\s*,?\s*\}/g;
let m;
while ((m = re.exec(src))) {
  posts.push({
    slug: m[1],
    title: m[2].replace(/\\'/g, "'"),
    category: m[3],
    date: m[4],
    readTime: m[5],
    image: m[6],
    excerpt: m[7].replace(/\\'/g, "'"),
    body: m[8],
  });
}
console.log('matched', posts.length);
if (posts.length < 10) process.exit(1);

fs.mkdirSync('d:/downloads/sand raiders of sophie/src/data', { recursive: true });
const meta = posts.map(({ body, ...rest }) => rest);
const bodies = Object.fromEntries(posts.map((p) => [p.slug, p.body]));

fs.writeFileSync(
  'd:/downloads/sand raiders of sophie/src/data/blogMeta.ts',
  `export type BlogMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
};

export const BLOG_META: BlogMeta[] = ${JSON.stringify(meta, null, 2)};
`
);

fs.writeFileSync(
  'd:/downloads/sand raiders of sophie/src/data/blogBodies.ts',
  `export const BLOG_BODIES: Record<string, string> = ${JSON.stringify(bodies, null, 2)};
`
);

console.log('wrote blogMeta + blogBodies');
