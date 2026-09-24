/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF6F0', // Light cream
          100: '#E8DCC4', // Warm beige
          500: '#B27B41', // Caramel/Coffee
          600: '#8E5E2C', // Darker coffee
          900: '#2C1E16', // Espresso dark
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}