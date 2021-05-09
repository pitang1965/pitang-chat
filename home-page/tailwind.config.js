module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColoer: theme => ({
      ...theme('colors'),
      'primary': 'bg-blue-500',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
