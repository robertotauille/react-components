/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/*"],
  theme: {
    extend: {},
  },
  inject: true,
  plugins: [require("@tailwindcss/forms")],
};
