<template>
  <!-- top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -->
  <div class="z-10 w-full flex justify-center items-center">
    <div class="flex flex-col w-fit gap-5">
      <transition name="fade">
        <Swiper
          :modules="[SwiperNavigation]"
          :slides-per-view="1"
          :navigation="{
            nextEl: '#swiper-next',
            prevEl: '#swiper-prev',
            disabledClass: 'opacity-0',
          }"
          class=""
        >
          <SwiperSlide v-for="i in 12" :key="i" class="">
            <NuxtImg :src="`journal_view/${i}.webp`" v-if="store.gatherPages" />
          </SwiperSlide>
        </Swiper>
        <!-- <NuxtImg src="journal_view/1.webp" v-if="store.gatherPages" /> -->
      </transition>
      <div class="flex justify-between">
        <transition name="fade">
          <Button
            name="назад"
            class="border border-dark-border"
            @click="store.gatherPages = !store.gatherPages"
            v-if="store.gatherPages"
          />
        </transition>
        <div class="flex gap-4">
          <transition name="fade">
            <Button
              id="swiper-prev"
              name="prev"
              class="border border-dark-border-alt text-light shadow-default"
              v-if="store.gatherPages"
            />
          </transition>
          <transition name="fade">
            <Button
              id="swiper-next"
              name="next"
              class="bg-light text-dark shadow-default"
              v-if="store.gatherPages"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
  <div class="outter w-full">
    <NuxtImg
      src="journal_desktop/1.webp"
      :class="`${store.gatherPages ? 'center' : 'left-1 top-5 -rotate-12'}`"
    />
    <NuxtImg
      src="journal_desktop/2.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[14rem] top-[6.5rem] rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/3.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[32rem] -top-4 -rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/4.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-0 bottom-[12rem] rotate-3'
      }`"
    />
    <NuxtImg
      src="journal_desktop/5.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[10rem] bottom-[-5rem] -rotate-12'
      }`"
    />
    <NuxtImg
      src="journal_desktop/6.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[32rem] top-[46rem] rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/7.webp"
      :class="`${store.gatherPages ? 'center' : 'left-[64rem] top-0 rotate-6'}`"
    />
    <NuxtImg
      src="journal_desktop/8.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[54rem] top-[45rem] -rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/10.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[77rem] top-[34rem] rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/9.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[85rem] top-[5rem] -rotate-1'
      }`"
    />
    <NuxtImg
      src="journal_desktop/11.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[100rem] top-[9rem] rotate-12'
      }`"
    />
    <NuxtImg
      src="journal_desktop/12.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[100rem] top-[38rem] -rotate-12'
      }`"
    />
  </div>
</template>

<script lang="ts" setup>
import { useClientStore } from '../../stores/client'

const store = useClientStore()
</script>

<style lang="postcss" scoped>
.center {
  @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0;
}

.outter {
  @apply w-[120rem] h-[67.5rem];
  @apply [&>*]:shadow-default [&>*]:absolute;
  @apply fixed;
  @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
.fade-enter-from {
  @apply opacity-0;
}
.fade-enter-to {
  @apply opacity-100;
}
.fade-enter-active {
  @apply transition-all duration-300 ease-in-out;
  @apply delay-100;
}

.fade-leave-from {
  @apply opacity-100;
}
.fade-leave-to {
  @apply opacity-0;
}
</style>
