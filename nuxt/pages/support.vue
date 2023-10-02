<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col my-auto">
      <div class="flex flex-col justify-center gap-8 grow">
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
        <div class="flex flex-col items-center w-full gap-8" id="control">
          <div class="flex flex-col items-center gap-5 text-center">
            <h2 class="text-hl-yellow text-h-lg-700">
              {{ getLocalizedString($i18n.locale, support.title) }}
            </h2>
            <p class="text-body-lg-600">
              {{ getLocalizedString($i18n.locale, support.text) }}
            </p>
          </div>
          <div
            class="flex-col sm:flex-row flex gap-4 w-full justify-center flex-wrap [&>*]:btn-dark-outline"
          >
            <Button
              :to="support.patreon.link"
              target="_blank"
              :name="getLocalizedString($i18n.locale, support.patreon.name)"
            >
              <NuxtIcon name="social/patreon" class="text-[1.5rem]" filled />
            </Button>
            <Button
              :to="support.bandcamp.link"
              target="_blank"
              :name="getLocalizedString($i18n.locale, support.bandcamp.name)"
            >
              <NuxtIcon name="social/bandcamp" class="text-[1.5rem]" filled />
            </Button>
            <Button
              :to="support.paypal.link"
              target="_blank"
              :name="getLocalizedString($i18n.locale, support.paypal.name)"
            >
              <NuxtIcon name="social/paypal" class="text-[1.5rem]" filled />
            </Button>
            <Button
              :to="support.diaka.link"
              target="_blank"
              :name="getLocalizedString($i18n.locale, support.diaka.name)"
            >
              <NuxtIcon name="feather/heart" class="text-[1.5rem]" filled />
            </Button>
            <Button
              :to="support.mono.link"
              target="_blank"
              :name="getLocalizedString($i18n.locale, support.mono.name)"
            >
              <NuxtIcon
                name="feather/dollar-sign"
                class="text-[1.5rem]"
                filled
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const support = await sanityStore.getSupportPage()
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
