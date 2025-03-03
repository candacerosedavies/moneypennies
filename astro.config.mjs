import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    // Configure Tailwind integration properly (wasn't working with new mixin scss files)
    tailwind({
      config: { path: './tailwind.config.js' },
    })
  ],
  publicDir: 'public',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Important! makes mixins available globally in components, use with style tags as per reg CSS
          additionalData: `@import "./src/styles/mixins.scss";`
        }
      }
    }
  }
});