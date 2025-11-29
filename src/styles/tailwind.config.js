// frontend/src/styles/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scan semua file React
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5", // Indigo utama
          dark: "#3730a3",
          light: "#818cf8",
        },
        secondary: {
          DEFAULT: "#f59e0b", // Amber
          dark: "#b45309",
          light: "#fcd34d",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // styling form
    require("@tailwindcss/typography"), // prose
    require("@tailwindcss/aspect-ratio"), // aspect ratio
  ],
};