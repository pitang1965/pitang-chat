module.exports = {
  purge: ['./dist/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColoer: theme => ({
      ...theme('colors'),
      'primary': 'bg-blue-500',
    }),
    extend: {
      lineHeight: {
        16: '4rem',
      },
      maxWidth: {
        '60': '5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
