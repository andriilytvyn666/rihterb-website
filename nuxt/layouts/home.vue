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
  title: 'Ріхтер',
  description:
    'український інді-музикант. пишу психоделічні інді пісні з унікальним саундом. поєднуючи різні жанри, досліджую емоційні простори, створюючи неповторний настрій.',
  author: 'Vasily Richter',
  robots: 'all noarchive',
  charset: 'utf-8',
  ogTitle: 'Ріхтер',
  ogDescription:
    'український інді-музикант. пишу психоделічні інді пісні з унікальним саундом. поєднуючи різні жанри, досліджую емоційні простори, створюючи неповторний настрій.',
  twitterTitle: 'Ріхтер',
  twitterDescription:
    'Hi there! I am a Ukrainian indie musician who writes psychedelic indie songs with a unique sound. In my music, I blend different genres and explore emotional spaces, creating a one-of-a-kind atmosphere.',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://rihterb.pp.ua/banner.webp',
  ogImage: 'https://rihterb.pp.ua/banner.webp',
})

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  link: [
    ...(i18nHead.value.link || []),
    { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon.png' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
  meta: [...(i18nHead.value.meta || [])],
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
