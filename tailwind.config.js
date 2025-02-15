module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.{vue,js}',
      './pages/**/*.{vue,js}',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    options: {
      safelist: [/^bg-/, /^text-/] // Example: keeping specific classes
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
