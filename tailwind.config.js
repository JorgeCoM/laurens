/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#051D40',
      'secundary': '#289CD7',
      'tersary': '#1460A6',
      'gray': '#CCD6DB',
      'white': '#ffffff',
      'black': '#000',  
    },
    extend: {},
  },
  plugins: [],
}