<template>
  <div class="flex flex-col min-h-screen">
    <DevOnly>
      <DebugIndicator />
    </DevOnly>
    <Header class="sticky top-0" />
    <div class="flex overflow-hidden flex-col grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const i18nHead = useLocaleHead({
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

const htmlAttrs = i18nHead.value.htmlAttrs

// if (htmlAttrs === undefined) {
//   htmlAttrs = { lang: 'en' }
// }

useHead({
  htmlAttrs: {
    lang: htmlAttrs.lang,
  },
  link: [
    ...(i18nHead.value.link || []),
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      ref: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  meta: [...(i18nHead.value.meta || [])],
})

// useHead({
//   htmlAttrs: {
//     lang: i18nHead.value.htmlAttrs!.lang,
//   },
//   link: [...(i18nHead.value.link || [])],
//   meta: [...(i18nHead.value.meta || [])],
// })

useSeoMeta({
  title: 'Ріхтер',
  description:
    'український інді-музикант. пишу психоделічні інді пісні з унікальним саундом. поєдную різні жанри, такі як: гараж рок, сьорф чи навіть електропоп.',
  ogDescription:
    'український інді-музикант. пишу психоделічні інді пісні з унікальним саундом. поєдную різні жанри, такі як: гараж рок, сьорф чи навіть електропоп.',
  twitterDescription:
    'український інді-музикант. пишу психоделічні інді пісні з унікальним саундом. поєдную різні жанри, такі як: гараж рок, сьорф чи навіть електропоп.',
  author: 'Василій Ріхтер',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://rihterb.pp.ua/banner.webp',
  ogImage: 'https://rihterb.pp.ua/banner.webp',
  charset: 'utf-8',
})
</script>
