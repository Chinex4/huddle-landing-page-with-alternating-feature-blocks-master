const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal,
        'palecyan': 'hsl(193, 100%, 96%)',
        'darkcyan': 'hsl(192, 100%, 9%)',
        'grayblue': 'hsl(208, 11%, 55%)',
        'pinky': 'hsl(322, 100%, 66%)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
