import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output only — no SSR adapters.
export default defineConfig({
  base: '/nook-cafe/',
  site: 'https://nook-cafe.example',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: true })],
  build: { inlineStylesheets: 'auto' },
});