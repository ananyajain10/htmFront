/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#16171E',
        pink:"#FBE8EC",
        orange:"#FF8329",
        purple:"#975D8D",
        darkViolet:"#3C354B",
      },
    },
  },
  plugins: [],
}