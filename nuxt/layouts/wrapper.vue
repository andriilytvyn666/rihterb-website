<template>
  <div class="px-4 xl:px-0">
    <DevOnly>
      <DebugIndicator />
    </DevOnly>
    <div id="page-wrapper">
      <div class="flex flex-col min-h-screen">
        <Header class="w-full" />
        <div class="flex flex-col grow">
          <slot />
        </div>
        <Footer />
      </div>
    </div>
  </div>
  <RobotMeta />
</template>

<style lang="postcss" scoped>
#page-wrapper {
  @apply w-full;
}

@screen xl {
  #page-wrapper {
    @apply w-[78.75rem];
    @apply mx-auto;
  }
}
</style>

<script lang="ts" setup>
defineRobotMeta()

useSchemaOrg([
  defineWebSite({
    name: 'Ріхтер',
    description:
      'український інді-музикант. пишу психоделічні інді пісні з унікальним саундом. поєдную різні жанри, такі як: гараж рок, сьорф чи навіть електропоп.',
    inLanguage: ['en', 'uk'],
    url: 'https://rihterb.pp.ua',
  }),
  definePerson({
    name: 'Василій Ріхтер',
    description:
      'український інді-музикант. пишу психоделічні інді пісні з унікальним саундом. поєдную різні жанри, такі як: гараж рок, сьорф чи навіть електропоп.',
    image: '/schemaorg/person.webp',
    url: 'https://rihterb.pp.ua',
  }),
])

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

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
})

let htmlAttrs = i18nHead.value.htmlAttrs

if (htmlAttrs === undefined) {
  htmlAttrs = { lang: 'en' }
}

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
</script>
