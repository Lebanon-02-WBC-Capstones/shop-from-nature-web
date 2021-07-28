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
        olivegreen: "#5F7264",
        red: "#9F6544",
        pink: "#F4EFE8",
        green: "#7EAC8A",
      },
      boxShadow: {
        ll: "-41px -34px #7EAC8A",
        l: "-30px 14px #9F6544"
      },

    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
      animation: ['motion-reduce'],
      padding: ['hover'],
      textColor: ['hover']
    },
  },
  plugins: [],
};