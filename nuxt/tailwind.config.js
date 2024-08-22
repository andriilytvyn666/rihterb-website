module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      '2xl': '1800px',
      'xl': '1320px',
      'lg': '1024px',
      'md': '768px',
      'sm': '560px',
      'xs': '320px',
    },
    fontFamily: {
      sans: 'Helvetica',
      inter: 'Inter',
    },
    fontSize: {
      'body': [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '700',
        },
      ],
      'caption': [
        '1.5rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '800',
        },
      ],
      'header': [
        '1rem',
        {
          lineHeight: '1.125rem',
          fontWeight: '600',
        },
      ],
      'title': [
        '2rem',
        {
          lineHeight: '2.25rem',
          fontWeight: '800',
        },
      ],
      'title-mobile': [
        '1.75rem',
        {
          lineHeight: '2rem',
          fontWeight: '800',
        },
      ],
      'logo': [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '700',
        },
      ],
      'button-mobile': [
        '0.75rem',
        {
          lineHeight: '1rem',
          fontWeight: '600',
        },
      ],
      'button': [
        '0.875rem',
        {
          lineHeight: '1.125rem',
          fontWeight: '600',
        },
      ],
      'header-mobile': [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '600',
        },
      ],
      'footer': [
        '0.875rem',
        {
          lineHeight: '1.125rem',
          fontWeight: '600',
        },
      ],
    },
    colors: {
      accent: '#F8A711',
      fg1: '#FFFAFA',
      fg2: '#484848',
      bg1: '#202020',
      bg2: '#181818',
    },
  },
  plugins: [],
}
