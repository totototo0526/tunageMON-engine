import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

const isBuild = process.env.npm_lifecycle_event === 'build';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://totototo0526.github.io',
  base: process.env.BASE_PATH || '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static'
});