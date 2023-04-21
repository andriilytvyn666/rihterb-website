<template>
  <div
    class="flex flex-col items-center justify-between gap-8 p-8 overflow-hidden rounded-lg bg-dark-alt"
  >
    <Swiper
      id="swiper"
      free-mode
      :slides-per-view="1"
      :space-between="32"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
      }"
    >
      <SwiperSlide v-for="i in 3" :key="i" class="page">
        <NuxtImg rel="preload" :src="`/minecraft/${i}.webp`" class="image" />
      </SwiperSlide>
    </Swiper>
    <div
      class="flex flex-col justify-between w-full gap-8 sm:gap-0 sm:flex-row"
    >
      <div class="flex flex-col gap-8 sm:flex-row">
        <div class="flex flex-col justify-center gap-2">
          <h2
            class="line-clamp-2 sm:line-clamp-1 w-fit text-hl-yellow text-h-lg-700"
          >
            майнкрафт сервер
          </h2>
          <p class="line-clamp-2 sm:line-clamp-1 text-light text-body-md-600">
            найкращий український сервер
          </p>
        </div>
      </div>
      <NuxtLink :to="localePath('/minecraft', $i18n.locale)">
        <Button name="грати" class="bg-light text-dark h-fit" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<style lang="postcss">
#swiper {
  @apply grid gap-8 overflow-visible;
  @apply grid-cols-1 md:grid-cols-2;
}
</style>
