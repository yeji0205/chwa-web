/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary : "#00040f",
        skin : "#F7EEE7",
        dimWhite: "rgba(255, 255, 255, 0.8)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        darkGreen: "#283820",
        curry:"#8A5B20",
      },
      borderRadius: {
        'lg':'1rem',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bareum : ["Bareum", "Nanum Gothic"],
        icesimin : ["Icesimin", "Nanum Gothic"],
        dovemayo : ["Dovemayo", "Nanum Gothic"],
        dovemayo_b : ["Dovemayo_b", "Nanum Gothic"],
      },
    },
    screens: {
      sm: "601px",
      md: "826px",
    },
  },
  plugins: [],
};
