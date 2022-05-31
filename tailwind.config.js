const withAnimations = require('animated-tailwindcss');

module.exports =  withAnimations ({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        "fontSize": {
         "base": "1rem",
         "lg": "1.375rem",
         "xl": "1.75rem"
        },
        "fontFamily": {
         "mulish": "Mulish",
         "metal-mania": "Metal Mania"
        },
        "borderRadius": {
         "none": "0",
         "xs": "0.25rem",
         "sm": "0.3125rem",
         "default": "0.4375rem",
         "lg": "0.625rem",
         "xl": "0.9375rem",
         "2xl": "2.1875rem",
         "3xl": "2.8271484375rem",
         "4xl": "5.0888671875rem",
         "full": "9999px"
        },
        "backgroundColor":{
          
        }
    },
  },
  plugins: [],
});
