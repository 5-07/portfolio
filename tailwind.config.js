/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linen: '#FFF9F3',
        latte: '#DBC4A5',
        clockwork: '#72583E',
        cedar: '#7C7960',
        'deep-olive': '#44422D',
        'cafe-noir': '#443223',
        mauve: '#755151',
        weathered: '#A08670',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
