module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      olivegreen: "#7eac8a",
      red: "#9F6544",
      black: "#000000",
      gray: "#c5cbc5",
      dark: "#717771",
      tan: "#fcfbf9",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
