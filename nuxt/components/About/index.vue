<template>
  <div class="flex flex-col items-center gap-8 sm:items-stretch sm:flex-row">
    <SanityImage
      :asset-id="about.photo.asset._ref"
      w="1000"
      h="1000"
      rel="preload"
      class="rounded-lg w-[20.875rem] max-h-[20.875rem] sm:w-[17.875rem] sm:max-h-[17.875rem] shadow-default aspect-square"
      alt="Vasily Richter"
    />
    <div class="flex flex-col justify-between gap-8 sm:gap-0">
      <div class="flex flex-col text-center sm:text-left">
        <h2 class="section-title">
          {{ getLocalizedString($i18n.locale, about.name) }}
        </h2>
        <h3 class="section-text text-dark-secondary">
          {{ getLocalizedString($i18n.locale, about.subtitle) }}
        </h3>
      </div>
      <p class="text-left text-body-md-600 lg:text-body-lg-600 text-light">
        <span class="hidden select-text sm:inline">
          <p class="line-clamp-4">
            {{ getLocalizedString($i18n.locale, about.description) }}
          </p>
        </span>
        <span class="select-text sm:hidden">
          {{ getLocalizedString($i18n.locale, about.description) }}
        </span>
      </p>
      <div class="flex flex-col gap-4 sm:flex-row">
        <Button
          :to="about.listenLink"
          target="_blank"
          class="btn-highlight hover:-translate-y-1"
          :name="getLocalizedString($i18n.locale, about.listenName)"
        >
          <NuxtIcon name="feather/music" filled />
        </Button>
        <Button
          :to="about.socialLink"
          target="_blank"
          class="btn-light hover:-translate-y-1"
          :name="getLocalizedString($i18n.locale, about.socialName)"
        >
          <NuxtIcon name="feather/share" filled />
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const about = (await sanityStore.getMainPage()).about
</script>
