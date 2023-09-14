/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: 'tw-',
  theme: {
    extend: {
      screens: {
        'small': '320px',
        'medium': '576px',
        'tablet': '767px',
        'large': '992px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
};
