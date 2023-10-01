<template>
  <div>
    <DevOnly>
      <DebugIndicator />
    </DevOnly>
    <div id="page-wrapper">
      <div class="flex flex-col max-h-screen min-h-screen">
        <div class="flex justify-between px-4 pt-4 sm:px-8 sm:pt-8">
          <transition name="scale">
            <Button
              :to="localePath('/', $i18n.locale)"
              v-if="!clientStore.gatherPages"
              :name="t('magazine.homepage')"
              class="z-20 btn-dark-outline shadows-default hover:border-light w-min"
            >
              <NuxtIcon name="feather/home" filled />
            </Button>
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
              class="z-20 btn-light-outline w-min shadows-default"
            >
              <NuxtIcon name="feather/globe" filled />
            </Button>
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

const clientStore = useClientStore()
const localePath = useLocalePath()

const { t } = useI18n()

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
