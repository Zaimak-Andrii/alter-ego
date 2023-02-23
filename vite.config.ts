import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // root: 'src',
  server: {
    port: 3000,
  },
  base: '/alter-ego',
  build: {
    outDir: './build',
  },
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
      components: new URL('./src/components', import.meta.url).pathname,
      pages: new URL('./src/pages', import.meta.url).pathname,
      public: new URL('./public', import.meta.url).pathname,
    },
  },
});
