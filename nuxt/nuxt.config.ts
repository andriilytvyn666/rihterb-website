import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    'nuxt-gtag',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    'nuxt-schema-org',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/sanity',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUX_PUBLIC_SITE_URL || 'https://rihterb.pp.ua',
    },
  },
  gtag: {
    id: 'G-LMTHM8SJTC',
  },
  imports: {
    dirs: ['stores'],
  },
  robots: {
    sitemap: ['/sitemap.xml'],
  },
  schemaOrg: {
    host: 'https://rihterb.pp.ua',
  },
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
    vueI18n: './i18n.config.ts',
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
