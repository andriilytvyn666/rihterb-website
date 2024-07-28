<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col items-center h-full gap-8 my-auto">
      <!-- 43.75rem -->
      <div
        class="flex flex-col items-center justify-center gap-8 grow [&>*]:md:w-[36rem]"
      >
        <SanityImage
          :asset-id="concert.poster.asset._ref"
          w="700"
          h="700"
          rel="preload"
          class="mx-auto rounded-lg shadow-default aspect-square"
        />
        <div
          class="flex flex-col sm:flex-row gap-4 [&>*]:w-full w-full"
          v-if="concert.tickets.enabled || concert.instagram.enabled"
        >
          <Button
            :name="getLocalizedString($i18n.locale, concert.tickets.text)"
            :class="
              concert.tickets.look === 'important'
                ? 'btn-highlight'
                : 'btn-light'
            "
            :to="concert.tickets.link"
            target="_blank"
            v-if="concert.tickets.enabled"
          >
            <NuxtIcon name="feather/dollar-sign" filled />
          </Button>
          <Button
            :name="getLocalizedString($i18n.locale, concert.instagram.text)"
            :class="
              concert.instagram.look === 'important'
                ? 'btn-highlight'
                : 'btn-light'
            "
            :to="concert.instagram.link"
            target="_blank"
            v-if="concert.instagram.enabled"
          >
            <NuxtIcon name="social/instagram" filled />
          </Button>
        </div>
        <PortableText
          :value="getLocalizedPortableText($i18n.locale, concert.description)"
          :components="customComponents"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { PortableText, type PortableTextComponents } from '@portabletext/vue'

const sanityStore = useSanityStore()
const concert = await sanityStore.getConcertPage()

// TODO: Figure out types
const customComponents: PortableTextComponents = {
  marks: {
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return h(
        'a',
        {
          href: value.href,
          rel,
          target: '_blank',
          class:
            'border-b border-hl-yellow hover:border-hl-yellow-secondary text-hl-yellow hover:text-hl-yellow-secondary',
        },
        slots.default?.()
      )
    },
  },
  block: {
    normal: (_, { slots }) => h('p', { class: 'mb-4' }, slots.default?.()),
  },
}
</script>
