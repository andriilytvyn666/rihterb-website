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
  <div class="flex flex-col items-center flex-grow min-h-screen">
    <Header v-motion-fade-visible-once />
    <article
      id="article"
      class="grid items-stretch justify-center w-full grid-cols-12 gap-5 px-4 grow"
    >
      <div class="flex flex-col col-span-12 gap-10 pt-6 sm:gap-20">
        <slot />
      </div>
    </article>
    <Footer v-motion-fade-visible />
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Василь Ріхтер',
  description: 'Музикант, 12 років, пошлий, няшка :3 uwu',
  author: 'Васиь Ріхтер',
  robots: 'all noarchive',
  charset: 'utf-8',
})

useHead({
  htmlAttrs: {
    lang: 'uk-ua',
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
})
</script>

<style class="postcss">
@screen sm {
  #article {
    @apply w-[38rem] mx-auto;
  }
}

@screen md {
  #article {
    @apply w-[46rem] flex-row gap-0;
  }
}

@screen lg {
  #article {
    @apply w-[62rem];
  }
}

@screen xl {
  #article {
    @apply w-[73.75rem];
  }
}
</style>
