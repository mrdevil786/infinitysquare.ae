// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrdevil786.github.io',
  base: process.env.SITE_BASE || '/infinitysquare.ae/',
  vite: {
    plugins: [tailwindcss()]
  }
});
