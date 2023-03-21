<template>
  <div class="responsive" v-motion-fade-visible-once v-if="renderCondition">
    <div
      id="swiper-controls"
      class="absolute items-center justify-between h-[18.844rem] w-full flex z-10 sm:mx-4 pointer-events-none"
    >
      <div
        id="prev-video"
        class="ml-2 pointer-events-auto button-arrow sm:ml-0"
      >
        <nuxt-icon name="feather/arrow-left" filled />
      </div>
      <div
        id="next-video"
        class="mr-2 pointer-events-auto button-arrow sm:mr-0"
      >
        <nuxt-icon name="feather/arrow-right" filled />
      </div>
    </div>
    <Swiper
      :modules="[SwiperNavigation]"
      free-mode
      :slides-per-view="1"
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
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1240: {
          slidesPerView: 2,
        },
      }"
    >
      <SwiperSlide v-for="video in videos" :key="video._id">
        <Youtube class="h-full" :link="video.youtubeLink" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
const query: string = groq`*[_type == "videos"] | order(orderId asc)
     {_id, orderId, youtubeLink}`

const { data } = await useSanityQuery<video[]>(query)

const videos = data.value!

const renderCondition: boolean =
  videos !== undefined && videos !== null && videos.length > 0
</script>

<style lang="postcss">
.button-arrow {
  @apply transition ease-in-out duration-300;
  @apply bg-dark-hover hover:bg-[#282828];
  @apply border border-dark-hover hover:border-light-secondary;
  @apply flex items-center justify-center w-12 h-12 rounded-lg text-light;
  @apply cursor-pointer;
}

@screen sm {
  #swiper-controls {
    @apply flex w-[34rem];
  }
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
