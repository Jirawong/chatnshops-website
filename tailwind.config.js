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
    colors: {
      primary: "#324FFF",
      secondary: "#B9D7FF",
      success: "#00C853",
      error: "#FF0000",
      warning: "#FFCA28",
      "package-1": "#1766F3",
      "package-2": "#007C32",
      "package-3": "#FF8A00",
      "package-4": "#FF5959",
    },
  },
  plugins: [],
};
