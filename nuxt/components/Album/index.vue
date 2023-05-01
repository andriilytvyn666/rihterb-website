<template>
  <div
    class="flex flex-col items-center justify-between gap-8 p-8 rounded-lg sm:gap-0 sm:flex-row bg-dark-alt"
  >
    <div class="flex flex-col items-center gap-8 sm:flex-row">
      <SanityImage
        rel="preload"
        :asset-id="album.image.asset._ref"
        w="80"
        h="80"
        class="hidden rounded-lg sm:flex sm:w-20 sm:h-20 shadow-default"
      />
      <SanityImage
        rel="preload"
        :asset-id="album.image.asset._ref"
        w="500"
        h="500"
        class="w-full h-full rounded-lg sm:hidden shadow-default"
      />
      <div class="flex flex-col w-full gap-2 sm:justify-center">
        <h2 class="line-clamp-2 sm:line-clamp-1 w-fit section-title">
          {{ getLocalizedString($i18n.locale, album.title) }}
        </h2>
        <p class="line-clamp-2 sm:line-clamp-1 section-text">
          {{ getLocalizedString($i18n.locale, album.text) }}
        </p>
      </div>
    </div>
    <Button
      :to="localePath('/album', $i18n.locale)"
      :name="getLocalizedString($i18n.locale, album.buttonName)"
      class="w-full btn-light h-fit sm:w-fit"
    >
      <NuxtIcon name="feather/music" filled />
    </Button>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const album = (await store.getMainPage()).album
const localePath = useLocalePath()
</script>
