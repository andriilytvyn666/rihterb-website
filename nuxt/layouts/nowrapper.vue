<template>
  <div class="px-4 xl:px-0">
    <DevOnly>
      <DebugIndicator />
    </DevOnly>
    <div id="page-wrapper">
      <div class="flex flex-col min-h-screen">
        <!-- <Header class="w-full" /> -->
        <div class="flex flex-col gap-8 sm:gap-12 grow">
          <slot />
        </div>
        <!-- <Footer /> -->
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
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
const { t } = useI18n()

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  author: () => t('meta.author'),
  robots: 'all noarchive',
  charset: 'utf-8',
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  twitterTitle: () => t('meta.title'),
  twitterDescription: () => t('meta.description'),
  twitterCard: 'summary_large_image',
  twitterImage: 'https://rihterb.pp.ua/banner.webp',
  ogImage: 'https://rihterb.pp.ua/banner.webp',
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
    {
      'http-equiv': 'Content-Security-Policy',
      'content': 'upgrade-insecure-requests',
    },
  ],
})
</script>
