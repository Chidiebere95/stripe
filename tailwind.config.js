module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/hero.svg')",
        
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "purple-main": "#6700FF",
        "purple-light": "#9046FE",
        "pink-main": "#ff6af0",
        "sky-blue-pricing": "#03B6F8",
        "yellow-light-pricing": "#FFF022",
        "home-pink": "#ff6af0",
        "home-blue": "#6700FF",
        "home-yellow": "#fff022",
      }),
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
         "purple-main": '#6700FF' ,
        "purple-light": '#9046FE',
        "pink-main": "#ff6af0",
        "home-yellow": "#fff022",
        "home-blue": "#6700FF",
        "home-pink": "#ff6af0",
        "contact-gray": "rgba(255,255,255,0.2)",

       }),
       colors: {
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
