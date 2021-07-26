module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Oswald",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        grey: "#5F7264",
        olivegreen: "#7EAC8A",
        red: "#9F6544",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};