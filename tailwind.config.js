/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
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
