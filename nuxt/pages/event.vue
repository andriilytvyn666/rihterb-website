<template>
  <div class="flex justify-center md:items-center grow">
    <div class="flex flex-col gap-6 px-4 md:gap-8 md:flex-col">
      <div class="flex flex-col gap-4">
        <div
          v-for="img in event.images"
          :key="img.asset._ref"
          class="md:max-w-[29rem] flex border rounded-2xl aspect-square overflow-clip border-bg1 shrink-0"
        >
          <NuxtImg
            provider="sanity"
            sizes="600px sm:800px lg:600px"
            :quality="95"
            :src="img.asset._ref"
            class="w-full h-full"
            alt="Event Image"
          />
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:min-w-[25rem]">
        <div class="flex flex-col gap-3">
          <h1 class="font-sans text-caption text-accent">
            {{ getLocalizedString($i18n.locale, event.title) }}
          </h1>
          <p
            class="font-sans whitespace-pre-line text-body text-fg1 max-w-[25rem]"
          >
            {{ getLocalizedString($i18n.locale, event.text) }}
          </p>
        </div>
        <div class="flex [&>*]:w-full md:[&>*]:w-full gap-2">
          <ButtonLink
            v-for="button in event.buttons"
            :key="button.title.en"
            :icon="button.icon"
            :open-in-new-tab="button.openInNewTab"
            :primary="button.primary"
            :link="button.link"
            :title="getLocalizedString($i18n.locale, button.title)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  path: '/event',
  alias: ['/concert', '/gig', '/tour', '/zbir', '/donate', '/banka'],
})

const store = useSanityStore()
const event = await store.getEventPage()
</script>
