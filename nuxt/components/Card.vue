<template>
  <div
    :class="`${top ? 'flex-col-reverse' : 'flex-col'} flex gap-4 w-full md:w-[25rem]`"
  >
    <div class="flex border rounded-2xl aspect-square overflow-clip border-bg1">
      <NuxtImg
        provider="sanity"
        :src="image.asset._ref"
        :width="400"
        :height="400"
        :quality="100"
        class="w-full h-full"
      />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-accent text-caption font-inter">{{ title }}</h2>
        <p class="font-sans text-body line-clamp-2">
          {{ description.uk }}
        </p>
      </div>
      <ButtonLink
        :icon="button.icon"
        :title="button.title.uk"
        :link="button.link"
        :target="button.openInNewTab ? '_blank' : '_self'"
        class="w-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  top?: boolean
  title: string
  description: localePortableText
  image: image
  button: buttonLink
}>()
</script>
