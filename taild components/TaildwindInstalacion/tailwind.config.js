/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        danger: "#ff5f40",
      },
    },
    plugins: [],
  },
};

//este archivo indica la carpeta donde se procesaran los archivos
//content: ["./public/**/*.{html,js}"],
