/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark":"#111827"
      },
      fontFamily:{
        sans:["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

