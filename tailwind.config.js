module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightblue: {
          400: "#C2DEEE",
          500: "#2AACDF",
        },
        lightgreen: {
          400: "#BBDDDF",
          500: "#AFE197",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
