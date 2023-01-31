/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      "colors": {
        "Dark-Blue": "#161B22",
        "clair": "#eeedf0",
        "tonic": "#b8ffd0",
        "mainColor": "#555cc5",
        "SecondaryColor": "#cb69c1",
        "ThirdColor": "#6c72cb"
      },

      animation: {
      }
    },
  },
  plugins: [],
}
);