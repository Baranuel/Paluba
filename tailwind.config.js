/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rye: ["Rye", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      backgroundImage: {
        heroPattern: 'url("/assets/hero-pic.jpg")',
      },
      colors: {
        heroFilter: "#4A0109",
      },
    },
  },
  plugins: [],
};
