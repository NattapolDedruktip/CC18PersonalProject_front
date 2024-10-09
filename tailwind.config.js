/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        MyBg : "#1D1F00",
        MainOrange : "#FFAA00" ,
        InputBg : "#FCE8AC",
        InputText : "#481700" ,
      }
    },
    fontFamily : {
      body : ["Bebas Neue"]
    }
  },
  plugins: [
    require('daisyui'),
  ],
}