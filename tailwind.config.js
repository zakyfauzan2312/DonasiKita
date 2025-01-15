/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Tambahkan font Poppins di sini
      },
      colors: {
        "hijau-kb": "#65a30d",
      },
    },
  },
  plugins: [],
};
