module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },

    extend: {
      colors: {
        light: {
          DEFAULT: '#ffffff',
          secondary: '#939393',
        },
        dark: {
          DEFAULT: '#090909',
          hover: '#181818',
        },
      },
    },
  },
  plugins: [],
}
