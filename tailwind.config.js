/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      dispay: ['Cabin', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: "#3368C0", 
        secondary: "#EEF4FF", 
        background: "#F7FAFF", 
        darkBlue: "#184282", 
        lightBlue: "#BDD6FF", 
        dimBlue: "#F7FAFF", 
        overlayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
}

