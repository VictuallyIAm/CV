/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    screens: {
      '2xl': { min: '1535px' },
      xl: { min: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    animation: {
      slide: '3s linear 1s infinite running slidein',
    },

    extend: {
      colors: {
        'back-black': '#252525',
        'back-gray': '#fafafa',
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        '19/100': '19%',
      },
      height: {
        468: '468px',
      },
    },
  },
  plugins: [],
}
