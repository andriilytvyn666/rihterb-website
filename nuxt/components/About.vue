<template>
  <div class="flex flex-col gap-4 max-w-[25rem] md:w-fit">
    <div class="flex border rounded-2xl aspect-square overflow-clip border-bg1">
      <NuxtImg
        provider="sanity"
        :width="400"
        :height="400"
        :quality="100"
        :src="image.asset._ref"
        class="w-full h-full"
      />
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1">
        <h1
          class="font-inter text-title text-accent leading-1 whitespace-nowrap"
        >
          {{ name }}
        </h1>
        <h2 class="font-sans leading- whitespace-nowrap text-body">
          {{ subtitle }}
        </h2>
      </div>
      <div class="flex gap-2">
        <ButtonLink
          v-for="button in buttons"
          :key="button.title.en"
          :title="button.title.uk"
          :link="button.link"
          :icon="button.icon"
          :open-in-new-tab="button.openInNewTab"
          :primary="button.primary"
        />

        <!-- <ButtonLink
          link="https://google.com"
          target="_blank"
          title="spotify"
          icon="simple-icons:spotify"
          primary
        />
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="apple music"
          icon="simple-icons:applemusic"
          primary
        />
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="yt music"
          icon="simple-icons:youtubemusic"
          primary
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
  subtitle: string
  image: image
  buttons: buttonLink[]
}>()
</script>
