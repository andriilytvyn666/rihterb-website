import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icons', '@nuxt/image-edge'],
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
