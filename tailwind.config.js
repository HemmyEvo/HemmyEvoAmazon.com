/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        accent:"#66ccc1"
      },
      backgroundImage:{
      Wall :"url('Images/images\ -\ 2024-04-30T205240.614.jpeg');"
      },
      backgroundPosition:{
        Wall:"center"
      },
      
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl: "5rem",
          "2xl": "6rem"
        }
      }
  }, 
  },
  plugins: [],
}

