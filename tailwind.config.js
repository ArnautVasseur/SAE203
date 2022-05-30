const withAnimations = require('animated-tailwindcss');

module.exports =  withAnimations ({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
