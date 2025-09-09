/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // كل ملفات App Router
    './src/components/**/*.{js,ts,jsx,tsx}' // لو عندك Components خارج app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
