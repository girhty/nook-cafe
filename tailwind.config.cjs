/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Role-based palette tokens (derived from the NooK logo + post colour story) */
        anchor: '#2A1A12',        // Anchor Dark — deep warm chocolate
        'anchor-soft': '#3D271B',
        cream: '#FFF7EA',         // Base Light — warm cream
        'cream-2': '#F7EAD5',
        butter: '#FFE9A8',        // Primary Accent tint — large backgrounds
        'butter-2': '#FFF4CE',
        golden: '#F5B301',        // Primary Accent saturate — buttons / ribbon 2
        pink: '#FF9CC2',          // Pop Accent 1 — ribbons, chips, hard shadows
        lavender: '#B7A9F2',      // Pop Accent 2 — badges, checker, quote mark
        star: '#F5B301'           // Star / detail — ratings only
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'Haettenschweiler', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      maxWidth: { content: '1260px' },
      borderRadius: { '4xl': '2rem', '5xl': '2.75rem' },
      boxShadow: {
        hard: '14px 14px 0 0 #FF9CC2',
        'hard-dark': '14px 14px 0 0 #2A1A12',
        'hard-sm': '8px 8px 0 0 #2A1A12',
        soft: '0 22px 40px -18px rgba(42,26,18,.35)'
      }
    }
  },
  plugins: []
};