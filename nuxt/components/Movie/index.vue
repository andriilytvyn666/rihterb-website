h-[24rem]
<template>
  <div
    class="flex flex-col items-center justify-between gap-8 p-5 overflow-hidden rounded-lg sm:p-8 bg-dark-alt"
  >
    <div class="">
      <Swiper
        :modules="[SwiperPagination, SwiperMousewheel]"
        :mousewheel="{
          forceToAxis: true,
        }"
        :pagination="{
          el: '#movie-pagination',
        }"
        id="swiper"
        :slides-per-view="1"
        :space-between="32"
        :breakpoints="{
          768: {
            slidesPerView: 2,
          },
        }"
        class="h-full"
      >
        <SwiperSlide
          v-for="image in movie.images"
          :key="image.asset._ref"
          class="page"
        >
          <SanityImage
            rel="preload"
            height="327"
            :asset-id="image.asset._ref"
            class="image"
            alt="Movie Image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div id="movie-pagination" class="flex justify-center w-full"></div>
    <!-- <SanityImage
      :asset-id="movie.images[0].asset._ref"
      height="327"
      class="object-cover rounded-lg aspect-square shadow-default sm:hidden"
    /> -->
    <div
      class="flex flex-col items-center justify-between w-full gap-8 sm:gap-0 sm:flex-row"
    >
      <div class="flex flex-col gap-8 sm:flex-row">
        <div class="flex flex-col justify-center gap-2">
          <h2 class="line-clamp-2 sm:line-clamp-1 w-fit section-title">
            {{ getLocalizedString($i18n.locale, movie.title) }}
          </h2>
          <p class="line-clamp-2 sm:line-clamp-1 section-text">
            {{ getLocalizedString($i18n.locale, movie.text) }}
          </p>
        </div>
      </div>
      <Button
        :to="localePath('/movie', $i18n.locale)"
        :name="getLocalizedString($i18n.locale, movie.buttonName)"
        class="btn-light h-fit hover:-translate-y-1"
      >
        <NuxtIcon name="feather/youtube" filled />
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()

const sanityStore = useSanityStore()
const movie = (await sanityStore.getMainPage()).movie
</script>

<style lang="postcss">
#swiper {
  @apply grid gap-8 overflow-visible;
  @apply grid-cols-1 md:grid-cols-2;
}
</style>
