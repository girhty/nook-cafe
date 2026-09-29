import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/nook-cafe/',
  output: 'static',
  site: 'https://nook-cafe.example.com',
  integrations: [tailwind({ applyBaseStyles: true })],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
