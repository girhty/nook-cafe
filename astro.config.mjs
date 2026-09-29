import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/nook-cafe/',
  output: 'static',
  site: 'https://nook-cafe.example.com',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});