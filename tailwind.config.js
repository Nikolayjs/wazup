/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: ['Rubik'],
      },
      colors: {
        'black-rgba': 'rgba(11,20,26, 0.95)',
      },
      boxShadow: {
        cm: '0 6px 18px 0 rgb(11,20,26,0.5)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
