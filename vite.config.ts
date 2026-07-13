import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Vite injects the entry <script> into <head>. SEO auditors that stop at the
 * first <script> then miss body headings/links/images. Move head scripts to
 * just before </body> (after #seo-landmarks).
 */
function scriptsAfterSeoContent(): Plugin {
  return {
    name: 'scripts-after-seo-content',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const moved: string[] = [];
        const withoutHeadScripts = html.replace(/<head>([\s\S]*?)<\/head>/i, (_full, headInner: string) => {
          const cleaned = headInner.replace(/<script\b[^>]*>[\s\S]*?<\/script>\s*/gi, (script) => {
            moved.push(script.trim());
            return '';
          });
          return `<head>${cleaned}</head>`;
        });

        if (!moved.length) return withoutHeadScripts;

        if (/<\/body>/i.test(withoutHeadScripts)) {
          return withoutHeadScripts.replace(/<\/body>/i, `${moved.join('\n    ')}\n  </body>`);
        }
        return `${withoutHeadScripts}\n${moved.join('\n')}`;
      },
    },
  };
}

// Vite SPA for Cloudflare Workers assets. Output: dist/
export default defineConfig({
  plugins: [react(), tailwindcss(), scriptsAfterSeoContent()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2022',
    cssCodeSplit: true,
    emptyOutDir: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 600,
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/lenis')) {
            return 'lenis';
          }
          if (id.includes('/src/data/blogBodies')) {
            return 'blog-bodies';
          }
        },
      },
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});
