/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#1eb2a6",
        "primary-2": "#5D5FEF",
        "secondary-1": "#B8DDE3",
        backbg: "rgba(43, 78, 255, 0.7);",
        "light-white": "#F6F7F9",
        "light-dark": "#343A46",
        "dark-1": "#232730",
        "dark-2": "#09090A",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
      },
      screens: {
        xs: "480px",
      },
      width: {
        420: "420px",
        465: "465px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    //   require('@tailwindcss/forms'),
    //   require('@tailwindcss/aspect-ratio'),
    //   require('@tailwindcss/container-queries'),
  ],
};
