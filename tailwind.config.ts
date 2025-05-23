/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'cs': '1279px',
        'xl': '1440px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("@tailwindcss/animate"),
  ],
};
