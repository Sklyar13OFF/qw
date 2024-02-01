/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1200px',
      '2xl':'1440px',
      '3xl':'1940px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
