import en from './locales/en-US.json'
import uk from './locales/uk-UA.json'
import ru from './locales/ru-RU.json'
import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@pinia/nuxt',
    '@nuxtjs/sanity',
    '@vueuse/motion/nuxt',
  ],
  image: {
    sanity: {
      projectId: 'lh08fn64',
      dataset: 'production',
    },
  },
  sanity: {
    projectId: 'lh08fn64',
    dataset: 'production',
    apiVersion: '2023-03-07',
    minimal: true,
  },
  vite: {
    plugins: [eslintPlugin()],
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
    vueI18n: {
      legacy: false,
      locale: 'uk',
      fallbackLocale: 'en',
      availableLocales: ['en', 'uk', 'ru'],
      messages: { en, uk, ru },
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
        name: 'Українська також нахуй росію',
        iso: 'ru-RU',
        code: 'ru',
      },
    ],
  },
})
