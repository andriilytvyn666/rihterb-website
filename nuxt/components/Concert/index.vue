<template>
  <div
    class="flex flex-col justify-between gap-8 p-5 overflow-hidden rounded-lg sm:p-6 sm:pl-7 bg-light"
  >
    <div
      class="flex flex-col items-start justify-between w-full gap-8 sm:items-center sm:gap-0 sm:flex-row"
    >
      <div class="flex flex-col gap-8 sm:flex-row">
        <div class="flex flex-col justify-center gap-2">
          <h2
            class="text-hl-blue line-clamp-2 sm:line-clamp-1 w-fit section-title"
          >
            {{ getLocalizedString($i18n.locale, concert.title) }}
          </h2>
          <p class="line-clamp-2 sm:line-clamp-1 section-text text-dark">
            {{ getLocalizedString($i18n.locale, concert.text) }}
          </p>
        </div>
      </div>
      <Button
        :to="localePath('/concert', $i18n.locale)"
        :name="getLocalizedString($i18n.locale, concert.buttonName)"
        class="btn-dark-outline h-fit hover:-translate-y-1"
        aria-label="more"
      >
        <NuxtIcon name="feather/arrow-right-circle" filled />
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()

const sanityStore = useSanityStore()
const concert = (await sanityStore.getMainPage()).concert
</script>

<style lang="postcss">
#swiper {
  @apply grid gap-8 overflow-visible;
  @apply grid-cols-1 md:grid-cols-2;
}
</style>
