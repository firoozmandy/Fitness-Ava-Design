/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
       " gray-20": "#F8F4EB",
       " gray-50": "#EFE6E6",
       " gray-100": "#DFCCCC",
       " gray-500": "#5E0000",
       "primary-100":"#FFE1E0",
       "primary-300":"#FFA6A3",
       "primary-500":"#FF6B66",
       "primary-400":"#FFCD58",
       "primary-500":"#FFC132",
    },
    backgroundImage:(theme) => ({
      "gradient-yellowred":'linear-gradient(90deg,#FF616A 0%,#FFC837 100%)',
      'mobile-home':"url('./src/assets/fitnes.png')"
    }),
    fontFamily:{
      dmsans:["DM Sans" , "sans-serif"],
      montserrat:["Montserrat" , "sans-serif"]
    },
    content:{
      evoLvetext:"url('./src/assets/fitnes.png')",
      abstractwaves:"url('./src/assets/fitnes.png')",
      sparkles:"url('./src/assets/fitnes.png')",
      cirlces:"url('./src/assets/fitnes.png')",
    },
  },
  screens:{
    xs:"480px",
    sm:"768px",
    md:"1060px",
  }
},
  plugins: [],
}

