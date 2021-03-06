/* eslint-disable no-undef */
module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: "Oswald",
      },
      width: {
        prd: "250px",
        prdsp:"180px",
        prdss: "70px"
      },
      height: {
        prd: "250px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        mainbg: "#f4f0e9",
        grey: "#5F7264",
        olivegreen: "#7EAC8A",
        red: "#9F6544",
        green: "#5F7264",
        black: "#000000",
        white: "#fffdfb",
        gray: "#c5cbc5",
        dark: "#717771",
        tan: "#fcfbf9",
        bric: "#892E2E",
        darkGreen: "#186717",
      },
      minHeight: {
        0: "0",
        small: "6vh",
        medium: "15vh",
        large: "45vh",
        full: "100vh",
        "1/2": "50%",
        "3/4": "75%",
        "1/1": "100%",
        prdsh: "250px",
        prdsp: "180px",
        prdss: "70px"
      },
      maxWidth: {
        "2xs": "5rem",
        xs: "18vw",
        md: "50%",
        maxp: "65%",
        prdsh: "250px",
      },
      maxHeight: {
        lg: "200px",
        prdsh: "250px",
      },
      boxShadow: {
        md: ' -6px -6px  #7EAC8A',
        xl: "-15px -15px #7EAC8A",
        xxl: "-40px -35px #7EAC8A",
        ll: "-35px 20px #9F6544",
        fz: "15px -20px #9F6544",
      },
    },
  },
  variants: {
    boxShadow: ["active"],
    animation: ["motion-reduce"],
    padding: ["hover"],
    textColor: ["hover"],
    backgroundOpacity: ["active"],
  },
};
