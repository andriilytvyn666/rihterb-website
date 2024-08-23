<template>
  <div class="flex justify-center md:items-center grow">
    <div class="flex flex-col gap-4 px-4 md:gap-8 md:flex-row">
      <div
        class="sm:max-w-[25rem] flex border rounded-2xl aspect-square overflow-clip border-bg1 shrink-0"
      >
        <NuxtImg
          provider="sanity"
          sizes="600px sm:800px lg:600px"
          :quality="100"
          :src="event.image.asset._ref"
          class="w-full h-full"
          alt="Event Image"
        />
      </div>
      <div class="flex flex-col gap-4 md:mt-8 md:min-w-[37.5rem]">
        <div class="flex flex-col gap-3">
          <h1 class="text-caption font-inter text-accent">
            {{ getLocalizedString($i18n.locale, event.title) }}
          </h1>
          <p class="font-sans whitespace-pre-line text-body text-fg1">
            {{ getLocalizedString($i18n.locale, event.text) }}
          </p>
        </div>
        <div class="flex [&>*]:w-full md:[&>*]:w-fit gap-2">
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
  alias: ['/concert', '/gig', '/tour'],
})

const store = useSanityStore()
const event = await store.getEventPage()
</script>
