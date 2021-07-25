module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      grey: "#5F7264",
      olivegreen: "#7EAC8A",
      red: "#9F6544",
      black: "#000000",
      white:"#fcfbfb",
      gray: "#c5cbc5",
      dark: "#717771",
      tan: "#fcfbf9",
      bric: "#892E2E",
    },
    fontFamily: {
      "oswald": "Oswald",
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
