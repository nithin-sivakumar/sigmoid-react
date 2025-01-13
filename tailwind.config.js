/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        borderColor: "#F3F3F3",
        darkColor: "#191A23",
        blackColor: "#000000",
      },
    },
  },
  plugins: [],
};
