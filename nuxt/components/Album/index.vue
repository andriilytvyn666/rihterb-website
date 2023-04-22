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
        class="hidden sm:flex rounded-lg sm:w-20 sm:h-20 shadow-default"
      />
      <SanityImage
        rel="preload"
        :asset-id="album.image.asset._ref"
        w="334"
        h="334"
        class="rounded-lg w-full h-full sm:hidden shadow-default"
      />
      <div class="flex flex-col w-full gap-2 sm:justify-center">
        <h2
          class="line-clamp-2 sm:line-clamp-1 w-fit text-hl-yellow text-h-lg-700"
        >
          {{ getLocalizedString($i18n.locale, album.title) }}
        </h2>
        <p class="line-clamp-2 sm:line-clamp-1 text-light text-body-md-600">
          {{ getLocalizedString($i18n.locale, album.text) }}
        </p>
      </div>
    </div>
    <Button
      :to="localePath('/album', $i18n.locale)"
      :name="getLocalizedString($i18n.locale, album.buttonName)"
      class="bg-light text-dark h-fit w-full sm:w-fit"
    />
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const album = (await store.getMainPage()).album
const localePath = useLocalePath()
</script>
