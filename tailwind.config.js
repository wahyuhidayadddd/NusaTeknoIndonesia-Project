/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#5CE1E6',
        secondary: '#adf0f2',
        tertiary: '#def9fa',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};