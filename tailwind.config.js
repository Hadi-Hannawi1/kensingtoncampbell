/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf6f1',
        blush: '#faf3ee',
        dark: '#3d3a2f',
        accent: '#c9a876',
        purple: '#a6839b',
        muted: '#b8a895',
        border: '#e8dfd0',
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        'serif-display': ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
