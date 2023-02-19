<template>
  <!-- <div
    class="fixed z-50 flex items-center justify-center w-10 h-10 bg-red-500 rounded-lg top-4 left-4 text-light"
  >
    <span class="hidden xs:block sm:hidden">xs</span>
    <span class="hidden sm:block md:hidden">sm</span>
    <span class="hidden md:block lg:hidden">md</span>
    <span class="hidden lg:block xl:hidden">lg</span>
    <span class="hidden xl:block 2xl:hidden">xl</span>
    <span class="hidden 2xl:block">2xl</span>
  </div> -->
  <div class="bg-[#1a1a1a] h-max">
    <FirstMenuOpen v-if="store.isMenuOpen" />
    <header
      class="sticky top-0 flex items-center justify-center h-28 bg-[#1a1a1a]"
    >
      <FirstNav class="hidden sm:flex" />
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
</script>
