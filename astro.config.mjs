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
          // Important! makes mixins available globally in components, use with style tags as per reg CSS.
          //the 'as *' makes all mixins avaailable without needing to prefix them eg use @include for-size() instead of @include mixins.for-size()
          additionalData: `@use "./src/styles/mixins.scss" as *;`
        }
      }
    }
  },


});