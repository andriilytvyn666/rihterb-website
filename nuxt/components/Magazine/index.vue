<template>
  <div class="flex">
    <div
      class="flex flex-col items-center justify-between gap-8 p-5 overflow-hidden rounded-lg sm:p-6 bg-dark-alt"
    >
      <!-- <SanityImage
        :asset-id="magazine.images[0].asset._ref"
        alt="magazine"
        class="rounded-lg sm:hidden shadow-default"
      /> -->
      <div class="">
        <Swiper
          :modules="[SwiperPagination, SwiperMousewheel]"
          :mousewheel="{
            forceToAxis: true,
          }"
          :pagination="{
            el: '#magazine-pagination',
          }"
          id="swiper"
          :slides-per-view="1"
          :space-between="32"
          :breakpoints="{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }"
        >
          <SwiperSlide
            v-for="image in magazine.images"
            :key="image.asset._ref"
            class="page"
          >
            <SanityImage
              rel="preload"
              height="725"
              :asset-id="image.asset._ref"
              class="image"
              alt="Magazine page"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="magazine-pagination" class="flex justify-center w-full"></div>
      <div
        class="flex flex-col items-center justify-between w-full gap-8 sm:gap-0 sm:flex-row"
      >
        <div class="flex flex-col items-center gap-8 sm:flex-row">
          <div class="flex flex-col justify-center gap-2">
            <h2 class="line-clamp-2 sm:line-clamp-1 w-fit section-title">
              {{ getLocalizedString($i18n.locale, magazine.title) }}
            </h2>
            <p class="line-clamp-2 sm:line-clamp-1 section-text">
              {{ getLocalizedString($i18n.locale, magazine.text) }}
            </p>
          </div>
        </div>
        <Button
          :to="localePath('/magazine', $i18n.locale)"
          :name="getLocalizedString($i18n.locale, magazine.buttonName)"
          class="btn-light h-fit hover:-translate-y-1"
        >
          <NuxtIcon name="feather/image" filled />
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()

const sanityStore = useSanityStore()
const magazine = (await sanityStore.getMainPage()).magazine
</script>

<style lang="postcss" scoped>
#swiper {
  /* @apply hidden; */
  @apply sm:grid gap-8 overflow-visible;
  @apply grid-cols-1 sm:grid-cols-3 md:grid-cols-4;
  @apply lg:grid-cols-5;
}
</style>

<style lang="postcss">
.swiper-pagination-bullets > .swiper-pagination-bullet {
  @apply bg-light;
}

.page {
  @apply h-full w-[20.875rem] sm:w-full overflow-visible;
}

.image {
  @apply object-cover w-full h-full rounded-lg shadow-default;
}
</style>
