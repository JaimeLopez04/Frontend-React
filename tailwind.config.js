/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6E06B3',
        purple2: '#6A287E',
        purple3: 'rgb(99, 1, 99, 0.95)',
      },
    },
  },
  plugins: [],
}

