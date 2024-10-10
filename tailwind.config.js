/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "600px" },
      md: { min: "600px", max: "1250px" },
      lg: { min: "1250px" },
    },
    extend: {
      boxShadow: {
        dim: " 0 0 0 200vmax rgba(0, 0, 0, .3)",
      },
    },
  },
  plugins: [],
};
