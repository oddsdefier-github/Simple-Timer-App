/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.{html,js}",
    "./index.html"

  ],
  theme: {
    extend: {
      colors: {
        'vsGray': '#282c34',
        'vsLight': '#cccccc',
        'vsDark': '#21252b',
        'vsBlue': '#528bff',
        'vsYellow': '#f0db4f',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}
