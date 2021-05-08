module.exports = {
  purge: ['./dist/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
