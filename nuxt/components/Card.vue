<template>
  <div
    :class="`${top ? 'flex-col-reverse' : 'flex-col'} flex gap-4  sm:max-w-[28rem] lg:w-full xl:max-w-[25rem]`"
  >
    <div class="flex overflow-clip rounded-2xl border aspect-square border-bg1">
      <NuxtImg
        provider="sanity"
        :src="image.asset._ref"
        sizes="600px sm:800px lg:600px"
        :quality="95"
        class="w-full h-full"
      />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-accent text-caption font-inter line-clamp-2">
          {{ getLocalizedString($i18n.locale, title) }}
        </h2>
        <p class="font-sans whitespace-pre-line text-body line-clamp-2">
          {{ getLocalizedString($i18n.locale, description) }}
        </p>
      </div>
      <ButtonLink
        :icon="button.icon"
        :title="getLocalizedString($i18n.locale, button.title)"
        :link="button.link"
        :target="button.openInNewTab ? '_blank' : '_self'"
        :open-in-new-tab="button.openInNewTab"
        :primary="button.primary"
        class="w-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  top?: boolean
  title: localeString
  description: localeString
  image: image
  button: buttonLink
}>()
</script>
