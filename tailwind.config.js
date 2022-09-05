/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      "7rem": "7rem",
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        aside: "0 0.125rem 0.375rem 0 rgb(161,172,184,0.2)",
        card: "0 0.125rem 0.375rem 0 rgb(67,89,113,0.2)",
        dropdown: "0 0.25rem 1rem rgb(161,172,184,0.5)",
      },
    },
  },
  plugins: [],
};
