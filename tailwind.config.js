/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "744px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
  },
  plugins: [],
};
