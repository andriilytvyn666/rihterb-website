<template>
  <div>
    <!-- <DevOnly>
      <DebugIndicator />
    </DevOnly> -->

    <div id="page-wrapper">
      <div class="flex flex-col min-h-screen max-h-screen">
        <div class="flex justify-between px-4 pt-4 sm:px-8 sm:pt-8">
          <transition name="scale">
            <Button
              :to="localePath('/', $i18n.locale)"
              v-if="!clientStore.gatherPages"
              :name="t('magazine.homepage')"
              class="btn-dark-outline z-20 shadows-default hover:border-light w-min"
            />
          </transition>
          <transition name="scale">
            <Button
              v-if="!clientStore.gatherPages"
              :name="$i18n.locale === 'en' ? 'укр' : 'eng'"
              @click="
                $i18n.locale === 'en'
                  ? $i18n.setLocale('uk')
                  : $i18n.setLocale('en')
              "
              class="btn-light-outline z-20 w-min shadows-default"
            />
          </transition>
        </div>
        <div class="flex flex-col gap-8 sm:gap-12 grow">
          <slot />
        </div>
      </div>
    </div>
  </div>
  <RobotMeta />
</template>

<style lang="postcss" scoped>
#page-wrapper {
  @apply w-full;
}
</style>

<script lang="ts" setup>
defineRobotMeta()
const store = useSanityStore()

await store.getMainPage()
await store.getMagazinePage()

const clientStore = useClientStore()
const localePath = useLocalePath()

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
