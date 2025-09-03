/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       rubik: ["Rubik", 'sans-serif']
      },
       container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: '2rem',
          md:'3rem',
        }
       },
       colors: {
        btnColor: '#e6193f',
        paraColor: '#383838',
        btnRight: '#920092'
       }
    },
  },
  plugins: [],
}