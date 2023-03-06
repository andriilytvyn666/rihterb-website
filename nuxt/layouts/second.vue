<template>
  <div class="flex flex-col items-center flex-grow min-h-screen bg-dark">
    <Header v-motion-fade-visible-once />
    <article
      id="article"
      class="grid items-stretch justify-center w-full grid-cols-12 gap-5 px-4 grow"
    >
      <div class="flex flex-col col-span-12 gap-12 pt-6">
        <slot />
      </div>
    </article>
    <Footer v-motion-fade-visible />
  </div>
</template>

<script setup lang="ts">
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
