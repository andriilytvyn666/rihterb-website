import eslintPlugin from 'vite-plugin-eslint'

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
  ],
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
