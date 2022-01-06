const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: { max: '362px' },
      sm: { max: '500px' },
      ...defaultTheme.screens,
    },

    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      gray: '#E5E5E5',
      blue: '#587BE0',
      gray_bg: '#f5f5f5',
      modal_bg: '#A7A9AB',
      gray_text: '#58555E',
      purple: '#885fff',
      green: '#18D7A9',
      light_gray: '#f7e9ff',
    },
  },
  plugins: [],
};
