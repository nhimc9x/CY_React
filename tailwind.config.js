/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1d2238',
        'secondary': '#262d47',
        'accent': '#e84393',
        'highlight': '#80f0ff',
      }
    },
  },
  plugins: [],
}

