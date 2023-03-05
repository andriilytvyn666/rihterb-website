<template>
  <div class="responsive" v-motion-fade-visible-once>
    <div
      id="swiper-controls"
      class="absolute items-center justify-between h-[18.844rem] hidden z-10 ml-4 pointer-events-none"
    >
      <div id="prev-video" class="pointer-events-auto button-arrow">
        <nuxt-icon name="feather/arrow-left" filled />
      </div>
      <div id="next-video" class="pointer-events-auto button-arrow">
        <nuxt-icon name="feather/arrow-right" filled />
      </div>
    </div>
    <Swiper
      :modules="[SwiperNavigation]"
      :slides-per-view="1.1"
      :space-between="20"
      :watch-overflow="true"
      :navigation="{
        nextEl: '#next-video',
        prevEl: '#prev-video',
        disabledClass: 'hidden-arrow',
      }"
      class="w-full h-[18.844rem] absolute z-0"
      :breakpoints="{
        500: {
          slidesPerView: 1.1,
        },
        640: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 1.1,
        },
        1024: {
          slidesPerView: 2.1,
        },
        1240: {
          slidesPerView: 2.1,
        },
      }"
    >
      <SwiperSlide>
        <Youtube class="h-full" id="JtQiHyjAfcE" />
      </SwiperSlide>
      <SwiperSlide>
        <Youtube class="h-full" id="OMFeupcAcjc" />
      </SwiperSlide>
      <SwiperSlide class="h-20">
        <Youtube class="h-full" id="7_owFMnNiDE" />
      </SwiperSlide>
      <SwiperSlide class="h-20">
        <Youtube class="h-full" id="lhaGirVXm84" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="postcss">
.button-arrow {
  @apply transition ease-in-out duration-300;
  @apply bg-dark-hover hover:bg-[#282828];
  @apply flex items-center justify-center w-12 h-12 rounded-full text-light;
  @apply cursor-pointer;
}

@screen md {
  #swiper-controls {
    @apply flex w-[42rem];
  }
}
.hidden-arrow {
  opacity: 0;
}

@screen lg {
  #swiper-controls {
    @apply w-[58rem];
  }
}

@screen xl {
  #swiper-controls {
    @apply w-[69.75rem];
  }
}
</style>
