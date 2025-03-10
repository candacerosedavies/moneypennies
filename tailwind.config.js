/** @type {import('tailwindcss').Config} */
import tailwindcssAria from 'tailwindcss-aria';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAria],
}