module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: "#5A0928",
        secondary:"#F45D96",
        off:"#D3CFC3",
        light:"#CCCCCC",
        grey:"#A5A4A1",
        green:"#48821D",
        lightpink:"rgba(251, 250, 245, 0.1)",
        dark:"#450B21",
        whate:"#FBFAF5",
        fqlight:"rgba(90, 9, 40, 0.68)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
