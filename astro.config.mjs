import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://digital-building-process-tu-wien.github.io',
  base: '/',
  build: {
    // Keep the small site stylesheet in the initial document so first paint is not blocked by a CSS request.
    inlineStylesheets: 'always',
  },
});
