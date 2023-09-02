<template>
  <NuxtLayout name="wrapper">
    <div
      class="flex flex-col items-center justify-center gap-8 grow [&>*]:md:w-[43.75rem]"
    >
      <SanityImage
        :asset-id="concert.poster.asset._ref"
        w="700"
        h="700"
        rel="preload"
        class="mx-auto rounded-lg shadow-default aspect-square"
      />
      <div class="">
        <PortableText
          :value="getLocalizedPortableText($i18n.locale, concert.description)"
          :components="customComponents"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<!-- <div
        class="flex flex-col items-center w-full gap-5 text-center text-body-lg-600"
      >
        <h2 class="section-title">
          {{ getLocalizedString($i18n.locale, concert.title) }}
        </h2>
      </div> -->

<!-- <div class="flex flex-col sm:flex-row gap-4 [&>*]:w-full w-full">
        <Button
          :name="getLocalizedString($i18n.locale, concert.ticketsText)"
          class="btn-light"
          :to="concert.ticketsLink"
          target="_blank"
        >
          <NuxtIcon name="feather/dollar-sign" filled />
        </Button>
      </div> -->

<script lang="ts" setup>
import { PortableText } from '@portabletext/vue'

// const localePath = useLocalePath()
const store = useSanityStore()
const concert = await store.getConcertPage()

const customComponents = {
  // types: {
  //   callToAction: ({ value, isInline }, { slots }) =>
  //     isInline
  //       ? h('a', { href: value.url }, value.text)
  //       : h('div', { class: 'callToAction' }, value.text),
  // },

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
