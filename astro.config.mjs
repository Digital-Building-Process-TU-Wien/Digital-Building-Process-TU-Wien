import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://digital-building-process-tu-wien.github.io',
  base: '/',
  vite: {
    // @ts-expect-error Astro's bundled Vite types differ from Tailwind's Vite plugin types.
    plugins: [tailwindcss()],
  },
});
