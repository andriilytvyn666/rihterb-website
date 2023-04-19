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
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }"
      >
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
  </div>
</template>

<script lang="ts" setup>
const images = ['1.png', '2.png', '3.png', '4.png', '5.png']
</script>

<style lang="postcss">
#swiper {
  @apply grid gap-8 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 overflow-visible;
}

.page {
  @apply h-full w-[20.875rem] sm:w-full overflow-visible;
}

.image {
  @apply object-cover w-full h-full rounded-lg shadow-default;
}
</style>
