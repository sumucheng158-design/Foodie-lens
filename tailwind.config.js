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
        brand: {
          DEFAULT: '#C0392B',
          light: '#E8574A',
          dark: '#922B21',
        },
        gold: '#D4A017',
      },
      fontFamily: {
        display: ['var(--font-noto-serif)', 'Georgia', 'serif'],
        body: ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
