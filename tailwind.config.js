/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        md:'3rem',
        lg:'4rem'
      }
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#00ADB5',
          black:'#222831',
          gray:'#393E46',
          white:'#EEEEEE'
        }
      }
    },
  },
  plugins: [],
}
