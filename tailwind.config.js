/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1650px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      "colors": {
        "Dark-Blue": "#161B22",
        "B-White": "#eee",
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