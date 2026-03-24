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
        bg: {
          DEFAULT: '#080c18',
          2: '#0e1424',
          3: '#131929',
        },
        cyan: {
          DEFAULT: '#00e5d4',
          dim: 'rgba(0,229,212,0.12)',
          glow: 'rgba(0,229,212,0.06)',
          border: 'rgba(0,229,212,0.18)',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
