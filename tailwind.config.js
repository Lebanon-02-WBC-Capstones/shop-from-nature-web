module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Oswald",
      },
      colors: {
        transparent: "transparent",
        mainbg: "#F4EFE8",
        current: "currentColor",
        grey: "#5F7264",
        olivegreen: "#7EAC8A",
        red: "#9F6544",
        green: "#5F7264",
      },
      minHeight: {
        0: "0",
        small: "6vh",
        medium: "15vh",
        large: "45vh",
        full: "100vh",
        full: "100%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxWidth: {
        "2xs": "5rem",
      },
      boxShadow: {
        xl:"-15px -15px #7EAC8A",
        xxl: "-40px -35px #7EAC8A",
        ll:"-35px 20px #9F6544",
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