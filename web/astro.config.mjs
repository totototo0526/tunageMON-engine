// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://totototo0526.github.io',
  base: process.env.BASE_PATH || '/tunageMON-engine',
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static'
});