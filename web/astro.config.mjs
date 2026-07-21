// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://totototo0526.github.io',
  base: process.env.BASE_PATH || '/tunageMON-engine',
  vite: {
    plugins: [tailwindcss()]
  }
});