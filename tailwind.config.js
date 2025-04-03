/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in src folder
    "./components/**/*.{js,ts,jsx,tsx}", // Include components folder if exists
  ],
  theme: {
    extend: {colors: {
      darkBg: "#0D0D0D",
      sidebar: "#1A1A1A",
      cardBg: "#202020",
      textPrimary: "#FFFFFF",
      accent: "#8A4FFF",
      highlight: "#E91E63"
    }},
  },
  plugins: [],
};

