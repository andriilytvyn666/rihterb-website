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
    provider: 'local',
    families: [
      {
        name: 'Helvetica-Bold',
        provider: 'local',
      },
      {
        name: 'Inter',
        provider: 'local',
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
    baseUrl: 'https://rihterb.pp.ua',
    defaultLocale: 'uk',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        name: 'English',
        iso: 'en-US',
        code: 'en',
        isCatchallLocale: true,
      },
      {
        name: 'Українська',
        iso: 'uk-UA',
        code: 'uk',
      },
      {
        name: 'Українська також',
        iso: 'ru-RU',
        code: 'ru',
      },
    ],
  },

  compatibilityDate: '2024-07-17',
})
