/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        xl: '1102px'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'serif']
      },
      colors: {
        moodboardName: '#E9ECEF',
        headerColor: '#80CBC4'
      }
    }
  },
  plugins: []
};
