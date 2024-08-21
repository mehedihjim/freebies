/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        conWidth: "1140px",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#F53855",
        secondary: "#0B132A",
        other: "#4F5665",
      },
    },
  },
  plugins: [],
};
