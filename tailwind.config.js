module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#202020',
      'secondary': '#334257',
      'third': '#F5F6F7'
    }),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#202020',
      'secondary': '#334257',
     }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#202020',
      'secondary': '#334257',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
