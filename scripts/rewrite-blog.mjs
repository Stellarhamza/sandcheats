import fs from 'fs';

const path = 'd:/downloads/dark and darker/src/pages/Blog.tsx';
let src = fs.readFileSync(path, 'utf8');
const start = src.indexOf('export const BLOG_POSTS = [');
const end = src.indexOf('\n];\n', start);
if (start < 0 || end < 0) {
  console.error('bounds', start, end);
  process.exit(1);
}

const replacement = `import { BLOG_META } from '../data/blogMeta';
import { BLOG_BODIES } from '../data/blogBodies';

export type BlogPost = (typeof BLOG_META)[number] & { body: string };

export const BLOG_POSTS: BlogPost[] = BLOG_META.map((meta) => ({
  ...meta,
  body: BLOG_BODIES[meta.slug] ?? '',
}));
`;

src = src.slice(0, start) + replacement + src.slice(end + 4);

// Deduplicate if imports already got inserted somehow
const dup = src.match(/import \{ BLOG_META \} from '\.\.\/data\/blogMeta';/g);
if (dup && dup.length > 1) {
  // keep first occurrence only after ClusterLinks
  let seen = 0;
  src = src.replace(/import \{ BLOG_META \} from '\.\.\/data\/blogMeta';\nimport \{ BLOG_BODIES \} from '\.\.\/data\/blogBodies';\n\nexport type BlogPost[\s\S]*?export const BLOG_POSTS: BlogPost\[] = BLOG_META\.map\(\(meta\) => \(\{[\s\S]*?\}\)\);\n/g, (block) => {
    seen += 1;
    return seen === 1 ? block : '';
  });
}

fs.writeFileSync(path, src);
console.log('Blog.tsx updated, length', src.length);
