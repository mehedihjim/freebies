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
      boxShadow: {
        '4xl': '0px 38px 42px -3px rgba(0,0,0,0.1)',
        '3xl': '0px 20px 30px -16px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
};
