/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {},
      gradientColors: {
        body_color: ["90deg", "hsl(23, 84%, 75%)", "hsl(9, 92%, 54%)"],
      },
    },
  },
  plugins: [],
};
