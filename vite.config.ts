import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Vite SPA for Cloudflare Pages (not Next.js). Output: dist/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    modulePreload: {
      polyfill: false,
    },
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
