/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '514px'}, // Custom breakpoint for screens less than 515px
      },
    },
  },
  plugins: [],
};
