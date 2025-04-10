/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          national: ['"National Park"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  