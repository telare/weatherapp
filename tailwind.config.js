/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        standart: "1.2rem",
        big: "2rem",
      },
    },
  },
  plugins: [],
};
