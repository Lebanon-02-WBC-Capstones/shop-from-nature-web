// eslint-disable-next-line no-undef
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
        olivegreen: "#5F7264",
        red: "#9F6544",
        green: "#7EAC8A",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
