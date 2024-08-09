<template>
  <div
    :class="`${top ? 'flex-col-reverse' : 'flex-col'} flex gap-4 w-full md:w-[25rem]`"
  >
    <div class="flex border rounded-2xl aspect-square overflow-clip border-bg1">
      <NuxtImg
        provider="sanity"
        :src="image.asset._ref"
        class="w-full h-full"
      />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-accent text-caption font-inter">{{ title }}</h2>
        <p class="font-sans text-body">
          Субота, 08.06, Кирилівська 45, Community Garden Початок о 17:00, вхід
          через Community Cafe
        </p>
      </div>
      <ButtonLink
        icon="material-symbols:arrow-forward"
        :title="linkText"
        :link="link"
        :target="newTab ? '_blank' : '_self'"
        class="w-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  top: boolean
  title: string
  description?: string
  image: image
  link: string
  linkText: string
  newTab: boolean
}>()
</script>
