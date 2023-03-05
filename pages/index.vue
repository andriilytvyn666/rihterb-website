<template>
  <!-- <DebugIndicator /> -->
  <div class="bg-[#1a1a1a] h-max">
    <FirstMenuOpen v-if="store.isMenuOpen" />
    <header
      class="sticky top-0 flex items-center justify-center h-28 bg-[#1a1a1a]"
    >
      <FirstNav class="hidden lg:flex" />
      <FirstMenuIcon />
      <NuxtImg src="/pp.png" alt="Logo" width="82" class="w-16 h-16" />
    </header>
    <article
      class="mt-16 sm:mt-32 pb-64 sm:mx-auto w-fit mx-4 sm:w-[35rem] z-1"
    >
      <div class="flex flex-col items-center gap-12 font-serif text-white">
        <h1 class="text-5xl">альбум_тайтл</h1>
        <div class="w-[19.5rem] bg-opacity-70 h-0.5 bg-white" />
        <div class="flex flex-col items-center text-center">
          <p>альбом дає можливість зануритись в життя звичайного</p>
          <p>українця чи українки після початку повномасштабного второгнення</p>
        </div>
        <NuxtImg src="/cover_reduced.jpg" alt="Cover" class="w-full" />
        <FirstBandcampPlayer />
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { useFirstStore } from '~~/stores/first'

const store = useFirstStore()

useServerSeoMeta({
  title: 'Vasyl Rihter',
  description:
    'Hi there! I am a Ukrainian indie musician who writes psychedelic indie songs with a unique sound. In my music, I blend different genres and explore emotional spaces, creating a one-of-a-kind atmosphere.',
  author: 'Vasyl Rihter',
  robots: 'all noarchive',
  charset: 'utf-8',
  ogTitle: 'Vasyl Rihter',
  ogDescription:
    'Hi there! I am a Ukrainian indie musician who writes psychedelic indie songs with a unique sound. In my music, I blend different genres and explore emotional spaces, creating a one-of-a-kind atmosphere.',
  twitterTitle: 'Vasyl Rihter',
  twitterDescription:
    'Hi there! I am a Ukrainian indie musician who writes psychedelic indie songs with a unique sound. In my music, I blend different genres and explore emotional spaces, creating a one-of-a-kind atmosphere.',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://rihterb.pp.ua/banner.webp',
  ogImage: 'https://rihterb.pp.ua/banner.webp',
})

useHead({
  htmlAttrs: {
    lang: 'uk-ua',
  },
  link: [
    { rel: 'icon', type: 'image/png', sizes: '64x64', href: 'favicon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
  ],
})
</script>
