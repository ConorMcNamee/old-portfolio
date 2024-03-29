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
        DEFAULT: '#053f5c',
        dark: '#292929',
        gradientFrom: '#517EE1',
        gradientTo: '#51BEE1',
        highlight: '#f27f0c',
        textLight: '#fff',
        textDark: '#fff',
      }
    },
    extend: {
      dropShadow: {
        '3xl': '0px 0px 5px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}
