/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: { space: ['Space Grotesk'] },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
