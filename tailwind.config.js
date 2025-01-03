export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sourGummy': ['Sour Gummy', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}