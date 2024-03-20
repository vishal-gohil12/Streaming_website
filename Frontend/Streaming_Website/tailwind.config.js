/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bevan: ["Bevan", "cursive"],
        Anta: ["Anta", "sans-serif"],
        Ubuntu: ["Ubuntu"]
      },
    },
  },
  plugins: [],
};
