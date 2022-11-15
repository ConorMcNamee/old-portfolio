/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'theme': {
        DEFAULT: '#F5F5F5',
        dark: '#171717',
        gradientFrom: '#517EE1',
        gradientTo: '#51BEE1'
      }
    },
    extend: {
      dropShadow: {
        '3xl': "5px 5px 0px 5px rgba(0,0,0, 1)",
      }
    },
  },
  plugins: [],
}
