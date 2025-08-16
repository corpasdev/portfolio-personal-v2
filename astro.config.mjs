// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://brandoncorpas.com",
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
});