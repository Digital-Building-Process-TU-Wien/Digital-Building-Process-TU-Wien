import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://digital-building-process-tu-wien.github.io',
  base: '/',
  build: {
    // Keep the stylesheet cacheable across the four language routes.
    inlineStylesheets: 'auto',
  },
});
