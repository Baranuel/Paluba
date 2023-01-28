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
        sahitya: ["Sahitya", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        heroFilter: "#4A0109",
        primaryRed: "#C00418",
        whiteBg: "#FFFCFC",
        textColor: "#4B4242",
      },
      screens: {
        sm: { min: "250px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      height: {
        "9/10": "90vh",
      },
    },
  },
  plugins: [],
};
