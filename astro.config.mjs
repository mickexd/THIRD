// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/',
  build: {
    assets: 'assets'
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        external: [],
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    },
    publicDir: 'public'
  },
  integrations: [react()]
});