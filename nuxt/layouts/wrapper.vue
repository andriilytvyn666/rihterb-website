<template>
  <div class="px-4 xl:px-0">
    <DevOnly>
      <DebugIndicator />
    </DevOnly>
    <div id="page-wrapper">
      <div class="flex flex-col min-h-screen">
        <!-- v-motion-fade -->
        <Header class="w-full" />
        <!-- v-motion-fade -->
        <div class="flex flex-col gap-8 sm:gap-12 grow">
          <slot />
        </div>
        <!-- v-motion-fade -->
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

const store = useSanityStore()

await store.getMainPage()
await store.getSupportPage()
await store.getMinecraftPage()
await store.getAlbumPage()
await store.getMagazinePage()

const { t } = useI18n()

// useSchemaOrg([
//   defineWebSite({
//     name: 'Ріхтер',

//   }),
//   definePerson({
//     name: 'Василій Ріхтер',
//     description;
//   }),
//   defineWebPage()
// ])

useSeoMeta({
  description: () => t('meta.description'),
  author: () => t('meta.author'),
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
  title: t('meta.title'),
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
  meta: [
    ...(i18nHead.value.meta || []),
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'twitter:title', content: t('meta.title') },
    { property: 'twitter:description', content: t('meta.description') },
  ],
})
</script>
