// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables dark mode support using class
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38a169', // Example green theme color
      },
    },
  },
  plugins: [],
};
