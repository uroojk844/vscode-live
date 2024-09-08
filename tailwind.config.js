/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#1e1e1e",
      },
    },
    borderColor: {
      DEFAULT: '#404040'
    }
  },
  plugins: [],
};
