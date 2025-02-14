import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';  // Changed this line

export default defineConfig({
  integrations: [react(), tailwind()],  // Added tailwind here
});