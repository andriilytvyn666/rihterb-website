<template>
  <div
    class="flex flex-col items-center justify-between gap-8 p-8 rounded-lg bg-dark-alt"
  >
    <Swiper
      free-mode
      :slides-per-view="1"
      :space-between="32"
      :watch-overflow="true"
      class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"
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
      <!-- TODO: fix cropped shadows -->
      <SwiperSlide v-for="image in images" :key="image" class="page">
        <NuxtImg :src="image" class="image" />
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
            журнал “дев’ять”
          </h2>
          <p class="line-clamp-2 sm:line-clamp-1 text-light text-body-md-600">
            журнал, створений разом з командою талановитих митців та мисткинь
          </p>
        </div>
      </div>
      <Button name="дивитись" class="bg-light text-dark h-fit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const images = ['1.png', '2.png', '3.png', '4.png', '5.png']
</script>

<style lang="postcss">
.page {
  @apply h-full w-[20.875rem] sm:w-full overflow-visible;
}

.image {
  @apply object-cover w-full h-full rounded-lg shadow-default;
}
</style>
