/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Role-based palette — warm boutique cafe
        anchor: {
          DEFAULT: '#2E1A12', // deep warm chocolate
          50: '#F7EFE7',
          100: '#E9D7C5',
          200: '#CFA98B',
          400: '#7A4A30',
          500: '#4E2E1C',
          700: '#3A2014',
          900: '#1F0F08',
        },
        cream: {
          DEFAULT: '#F7EFDF',
          50: '#FBF6EA',
          100: '#F7EFDF',
          200: '#EFE2C7',
          300: '#E4D2A7',
        },
        butter: {
          tint: '#FCE9A8',
          light: '#F8D672',
          DEFAULT: '#F2C14E',
          deep: '#D49B1C',
        },
        pop: {
          pink: '#F2839B',
          pinkDeep: '#E25E7C',
          lavender: '#B6A6E8',
          lavenderDeep: '#8E7BD0',
        },
        gold: '#E9B949',
      },
      fontFamily: {
        display: ['"Anton"', '"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'mega': '-0.02em',
        'mono': '0.18em',
      },
      lineHeight: {
        'crush': '0.9',
        'tightest': '0.85',
      },
      boxShadow: {
        'chunk': '6px 6px 0 0 #2E1A12',
        'chunk-pink': '8px 8px 0 0 #F2839B',
        'chunk-lav': '10px 10px 0 0 #B6A6E8',
        'chunk-butter': '8px 8px 0 0 #F2C14E',
        'soft': '0 18px 40px -18px rgba(46,26,18,0.35)',
      },
      animation: {
        'marquee': 'marquee 38s linear infinite',
        'marquee-rev': 'marquee-rev 42s linear infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-med': 'float 5s ease-in-out infinite',
        'wiggle': 'wiggle 1.2s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'reveal-up': 'reveal-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'reveal-up': {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'paper': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.18 0 0 0 0 0.10 0 0 0 0 0.07 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};