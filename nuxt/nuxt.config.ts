import eslintPlugin from 'vite-plugin-eslint'
import en from './locales/en-US.json'
import uk from './locales/uk-UA.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@nuxt/image-edge',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/sanity',
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: 'en',
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
    ],
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'uk'],
      messages: { en, uk },
    },
  },
  sanity: {
    projectId: 'lh08fn64',
    dataset: 'production',
    apiVersion: '2023-03-26',
    minimal: true,
  },
  css: ['~/assets/css/tailwind.css'],
  image: {
    provider: 'vercel',
    screens: {
      logo: 82,
      diaka: 26,
      photo: 300,
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
})
