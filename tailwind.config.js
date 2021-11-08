const defaultTheme = require('tailwindcss/defaultTheme');
const myTheme = require('./data/themes/index');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {
      colors: myTheme.colors,
      fontFamily: myTheme.fontFamily,
    },
    screens: myTheme.screens,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
