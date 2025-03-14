/** @type {import('tailwindcss').Config} */
import tailwindcssAria from 'tailwindcss-aria';


export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'parallax-section': 'url("/images/connect/pexels-didsss-2127522.jpg")',
      },
      colors: {
        'grey-blue': '#607ea8',
      },
      fontFamily: {
        sans: ['manrope', 'serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'manrope', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [tailwindcssAria],
}