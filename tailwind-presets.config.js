module.exports = {
  theme: {
    extend: {
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {},
      typography: {},
      colors: {
        primary: {
          DEFAULT: '#1C4F82',
          300: '#74ABE1',
          500: '#1C4F82',
          700: '#081726'
        },
        'primary-content': {
          DEFAULT: '#B8DBFF',
          300: '#E1F0FF',
          500: '#B8DBFF',
          700: '#48A2FF'
        },
        secondary: {
          DEFAULT: '#7D919B',
          300: '#ABB8BE',
          500: '#7D919B',
          700: '#49585F'
        },
        'secondary-content': {
          DEFAULT: '#002538',
          300: '#005B8A',
          500: '#002538',
          700: '#001B29'
        },
        accent: {
          DEFAULT: '#04BFBF',
          300: '#42FBFB',
          500: '#04BFBF',
          700: '#025151'
        },
        'accent-content': {
          DEFAULT: '#253E59',
          300: '#2E4D6F',
          500: '#253E59',
          700: '#0D161F'
        },
        neutral: {
          DEFAULT: '#23282F',
          50: '#738297',
          300: '#46505E',
          500: '#23282F',
          700: '#0B0D0F'
        },
        'neutral-content': {
          DEFAULT: '#C8D2E0',
          300: '#E2E7EF',
          500: '#C8D2E0',
          700: '#8097B8'
        },
        base: {
          DEFAULT: '#212121',
          300: '#353535',
          500: '#212121',
          700: '#121212'
        },
        'base-content': {
          DEFAULT: '#D4D4D4',
          300: '#EEEEEE',
          500: '#D4D4D4',
          700: '#B0B0B0'
        }
      },
      spacing: {},
      fontFamily: {}
    }
  },
  variants: {
    extend: {}
  },
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
          accent: '#04BFBF'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=business]'],
          accent: '#04BFBF'
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
};
