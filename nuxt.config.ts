import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icons', '@nuxt/image-edge'],
  css: ['~/assets/css/tailwind.css'],
  image: {
    provider: 'vercel',
  },
  vite: {
    plugins: [eslintPlugin()],
  },
})
