// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-gtag',
    'nuxt-simple-robots',
    'nuxt-schema-org',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@nuxt/image',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxtjs/sanity',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
    'nuxt-icon-tw',
    '@nuxt/fonts',
  ],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUX_PUBLIC_SITE_URL || 'https://rihterb.pp.ua',
    },
  },
  fonts: {
    families: [
      {
        name: 'Helvetica-Bold',
        provider: 'local',
      },
      {
        name: 'Inter',
        provider: 'google',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  gtag: {
    id: 'G-LMTHM8SJTC',
  },

  imports: {
    dirs: ['./stores', './utils'],
  },

  schemaOrg: {
    host: 'https://rihterb.pp.ua',
  },

  image: {
    sanity: {
      projectId: 'lh08fn64',
      dataset: 'production',
    },
    screens: {
      'xs': 320,
      'sm': 560,
      'md': 768,
      'lg': 1024,
      'xl': 1320,
      'xxl': 1800,
      '2xl': 1800,
    },
  },

  sanity: {
    projectId: 'lh08fn64',
    dataset: 'production',
    apiVersion: '2023-03-07',
    minimal: true,
  },

  css: ['~/assets/css/tailwind.css'],

  i18n: {
    defaultLocale: 'uk',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: 'en',
      redirectOn: 'root',
    },
    strategy: 'prefix_except_default',
    locales: [
      {
        name: 'English',
        language: 'en-US',
        code: 'en',
        isCatchallLocale: true,
      },
      {
        name: 'Українська',
        language: 'uk-UA',
        code: 'uk',
      },
      {
        name: 'Українська також',
        language: 'ru-RU',
        code: 'ru',
      },
      {
        name: 'Українська також',
        language: 'be-BY',
        code: 'bel',
      },
    ],
  },

  compatibilityDate: '2024-07-17',
})
