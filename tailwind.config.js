/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],

  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: '#040404',
        backgroundSecondary: '#0E0E0E',
        backgroundThirdy: '#101010',

        // Borders
        border: '#2F2F2F',
        borderError: '#7E0000',

        // Buttons
        primary: '#55CF24',
        secondary: '#CF2424',

        // Texts
        textSecondary: '#BEBEBE',
        textMuted: '#0E0E0E',
        textError: '#B30303',
      },

      fontFamily: {
        urbanist: ['Urbanist_400Regular'],
        'medium': ['Urbanist_500Medium'],
        'semibold': ['Urbanist_600SemiBold'],
        'bold': ['Urbanist_700Bold'],

        manrope: ['Manrope_400Regular'],
        'medium': ['Manrope_500Medium'],
      },
    },
  },

  plugins: [],
};