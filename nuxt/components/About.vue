<template>
  <div class="flex flex-col gap-4 sm:max-w-[28rem] lg:w-full xl:max-w-[25rem]">
    <div class="flex border rounded-2xl aspect-square overflow-clip border-bg1">
      <NuxtImg
        provider="sanity"
        sizes="600px sm:800px lg:600px"
        :quality="100"
        :src="image.asset._ref"
        class="w-full h-full"
        alt="Vasily Richter's Photo"
      />
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1">
        <h1
          class="font-inter text-title text-accent leading-1 whitespace-nowrap"
        >
          {{ getLocalizedString($i18n.locale, name) }}
        </h1>
        <h2 class="font-sans leading- whitespace-nowrap text-body">
          {{ getLocalizedString($i18n.locale, subtitle) }}
        </h2>
      </div>
      <div class="flex w-full gap-2 flex-nowrap">
        <ButtonLink
          class="w-full lg:w-fit"
          v-for="button in buttons"
          :key="button.title.en"
          :title="getLocalizedString($i18n.locale, button.title)"
          :link="button.link"
          :icon="button.icon"
          :open-in-new-tab="button.openInNewTab"
          :primary="button.primary"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: localeString
  subtitle: localeString
  image: image
  buttons: buttonLink[]
}>()
</script>
