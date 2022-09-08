/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        Red: "hsl(0, 100%, 74%)",
        Green: "hsl(154, 59%, 51%)",
        "Green-Hover": "hsl(154, 59%, 71%)",

        // ### Accent

        Blue: "hsl(248, 32%, 49%)",

        // ### Neutral

        DarkBlue: "hsl(249, 10%, 26%)",
        GrayishBlue: "hsl(246, 25%, 77%)",
      },
      backgroundImage: {
        "desctop-bg": "url('./images/bg-intro-desktop.png')",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  screens: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
    },
  },
  plugins: [],
};
