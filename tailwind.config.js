/* eslint-disable no-undef */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: "Oswald",
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      grey: "#5F7264",
      olivegreen: "#7EAC8A",
      red: "#9F6544",
      green: "#5F7264",
      black: "#000000",
      gray: "#c5cbc5",
      dark: "#717771",
      tan: "#fcfbf9",
      ecru: "#F8F5EF",
    },
    minHeight: {
      0: "0",
      small: "6vh",
      medium: "15vh",
      large: "45vh",
      full: "100vh",
      "1/2": "50%",
      "3/4": "75%",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
