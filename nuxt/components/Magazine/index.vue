<template>
  <div class="flex">
    <div
      class="flex flex-col items-center justify-between gap-8 p-8 overflow-hidden rounded-lg bg-dark-alt"
    >
      <Swiper
        id="swiper"
        free-mode
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
          <!-- <NuxtImg
            rel="preload"
            :src="`journal_view/${i}.webp`"
            class="image"
          /> -->
          <SanityImage
            rel="preload"
            :asset-id="image.asset._ref"
            class="image"
          />
        </SwiperSlide>
      </Swiper>
      <div
        class="flex flex-col justify-between w-full gap-8 sm:gap-0 sm:flex-row"
      >
        <div class="flex flex-col items-center gap-8 sm:flex-row">
          <div class="flex flex-col justify-center gap-2">
            <h2
              class="line-clamp-2 sm:line-clamp-1 w-fit text-hl-yellow text-h-lg-700"
            >
              {{ getLocalizedString($i18n.locale, magazine.title) }}
            </h2>
            <p class="line-clamp-2 sm:line-clamp-1 text-light text-body-md-600">
              {{ getLocalizedString($i18n.locale, magazine.text) }}
            </p>
          </div>
        </div>
        <NuxtLink :to="localePath('/magazine', $i18n.locale)">
          <Button
            :name="getLocalizedString($i18n.locale, magazine.buttonName)"
            class="bg-light text-dark h-fit"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const magazine = (await store.getMainPage()).magazine
const localePath = useLocalePath()
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
.page {
  @apply h-full w-[20.875rem] sm:w-full overflow-visible;
}

.image {
  @apply object-cover w-full h-full rounded-lg shadow-default;
}
</style>
