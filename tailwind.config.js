const defaultTheme = require("tailwindcss/defaultTheme");
const myTheme = require("./data/themes/index");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: colors[myTheme.colors.primary],
        secondary: colors[myTheme.colors.secondary],
      },
      fontFamily: {
        title: [myTheme.fontFamily.title.name, ...defaultTheme.fontFamily.sans],
        subtitle: [myTheme.fontFamily.subtitle.name, ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "320px",
      s: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
