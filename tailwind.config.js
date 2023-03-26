/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      mobile: { max: '320px' },
    },
  },
  plugins: [],
};
