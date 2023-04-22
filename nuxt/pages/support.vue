<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col h-full grow" v-motion-fade>
      <div class="flex flex-col gap-8 justify-center grow">
        <div class="flex justify-center">
          <SanityImage
            rel="preload"
            w="300"
            h="300"
            fit="crop"
            crop="top"
            :asset-id="support.images.imageBack.asset._ref"
            class="z-0 left-card"
          />

          <SanityImage
            rel="preload"
            w="300"
            h="300"
            fit="crop"
            crop="top"
            :asset-id="support.images.imageMiddle.asset._ref"
            class="z-0 middle-card sm:right-card"
          />
          <SanityImage
            rel="preload"
            w="300"
            h="300"
            fit="crop"
            crop="top"
            :asset-id="support.images.imageFront.asset._ref"
            class="z-10 right-card sm:middle-card"
          />
        </div>
        <div class="flex flex-col gap-8 items-center w-full" id="control">
          <div class="flex items-center flex-col gap-5 text-center">
            <h2 class="text-hl-yellow text-h-lg-700">
              {{ getLocalizedString($i18n.locale, support.title) }}
            </h2>
            <p class="text-body-lg-600">
              {{ getLocalizedString($i18n.locale, support.text) }}
            </p>
          </div>
          <div
            class="flex-col sm:flex-row flex gap-4 w-full justify-center flex-wrap"
          >
            <NuxtLink :to="support.patreon.link">
              <Button
                :name="getLocalizedString($i18n.locale, support.patreon.name)"
                class="border border-dark-border"
              >
                <NuxtIcon name="social/patreon" class="text-[1.5rem]" filled />
              </Button>
            </NuxtLink>
            <NuxtLink :to="support.bandcamp.link">
              <Button
                :name="getLocalizedString($i18n.locale, support.bandcamp.name)"
                class="border border-dark-border"
              >
                <NuxtIcon name="social/bandcamp" class="text-[1.5rem]" filled />
              </Button>
            </NuxtLink>
            <NuxtLink :to="support.paypal.link">
              <Button
                :name="getLocalizedString($i18n.locale, support.paypal.name)"
                class="border border-dark-border"
              >
                <NuxtIcon name="social/paypal" class="text-[1.5rem]" filled />
              </Button>
            </NuxtLink>
            <NuxtLink :to="support.diaka.link">
              <Button
                :name="getLocalizedString($i18n.locale, support.diaka.name)"
                class="border border-dark-border"
              >
                <NuxtIcon name="feather/heart" class="text-[1.5rem]" filled />
              </Button>
            </NuxtLink>
            <NuxtLink :to="support.mono.link">
              <Button
                :name="getLocalizedString($i18n.locale, support.mono.name)"
                class="border border-dark-border"
              >
                <NuxtIcon
                  name="feather/dollar-sign"
                  class="text-[1.5rem]"
                  filled
                />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useSanityStore } from '../stores/sanity'

const store = useSanityStore()
const support = await store.getSupportPage()
</script>

<style lang="postcss" scoped>
.card {
  @apply h-[16rem] lg:h-[18.75rem] aspect-square;
  @apply shadow-default rounded-lg;
}

.middle-card {
  @apply card;

  @apply rotate-0;
}

.left-card {
  @apply card;

  @apply relative;
  @apply top-1 left-56 -rotate-6;
  @apply sm:top-3 sm:left-32 sm:-rotate-6;
  @apply md:top-4 xl:top-5;
}

.right-card {
  @apply card;

  @apply relative;
  @apply top-1 -left-56 rotate-6;
  @apply sm:top-3 sm:-left-32 sm:rotate-6;
  @apply md:top-4 xl:top-5;
}
</style>
