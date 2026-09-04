import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative base path so the build works cleanly on GitHub Pages (subfolders) and Vercel (root)
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    open: false
  }
});
