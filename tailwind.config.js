/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#020101",
          900: "#020101",
          950: "#000000",
        },
        accent: {
          DEFAULT: "#F7D64C",
          hover: "#FFE277",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        focus: "0 0 0 2px rgba(247, 214, 76, 0.45)",
        glow: "0 0 30px rgba(255, 215, 0, 0.08)",
        "glow-md": "0 0 40px rgba(255, 215, 0, 0.1)",
        "glow-lg": "0 0 50px rgba(255, 215, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
