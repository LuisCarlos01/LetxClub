/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'letx-green-dark': '#2D4342',
        'letx-green-water': '#A0D8CF',
        'letx-blue': '#009BDB',
        'letx-blue-dark': '#2434BA',
        'letx-neon': '#CFF350',
        'letx-orange': '#F35C03',
        'letx-white': '#F8FAEF',
        'letx-black': '#000000',
      },
    },
  },
  plugins: [],
} 