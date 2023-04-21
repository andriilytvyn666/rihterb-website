<template>
  <NuxtLayout name="nowrapper">
    <JournalBg />
    <transition name="fade">
      <div
        class="z-10 w-full grow h-full flex items-center justify-center overflow-visible"
        v-if="store.gatherPages"
      >
        <div class="flex flex-col gap-5 overflow-visible items-center">
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1"
            :space-between="32"
            :navigation="{
              nextEl: '#swiper-next',
              prevEl: '#swiper-prev',
              disabledClass: 'opacity-0',
            }"
            class="w-[59rem] items-center flex justify-center grow h-[45.625rem] overflow-visible bg-dark"
          >
            <SwiperSlide
              v-for="i in 12"
              :key="i"
              class="flex justify-center items-center grow overflow-visible relative"
            >
              <NuxtImg :src="`journal_view/${i}.webp`" class="h-full" />
            </SwiperSlide>
          </Swiper>
          <div class="flex grow gap-4 w-[35rem]">
            <button
              id="swiper-prev"
              class="flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
            >
              <NuxtIcon name="feather/arrow-left" filled class="w-6 h-6" />
            </button>
            <!-- <NuxtLink :to="localePath('/', $i18n.locale)" class="grow"> -->
            <Button
              name="повернутися"
              class="border border-dark-border sm:w-full"
              @click="store.toggleGatherPages"
            />
            <!-- </NuxtLink> -->
            <button
              id="swiper-next"
              class="flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
            >
              <NuxtIcon name="feather/arrow-right" filled class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <!-- <div class="h-full w-full grow flex items-center justify-center"> -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          :class="`duration-600 bg-light shadow-default p-8 gap-8 flex flex-col items-center w-[40rem] rounded-lg`"
          v-if="!store.gatherPages"
        >
          <div class="gap-5 flex flex-col items-center">
            <h2 class="text-h-lg-700 text-hl-blue">журнал “дев’ять”</h2>
            <p class="text-body-md-500 text-dark">
              У журналі "дев'ять" ви знайдете цікаві статті про новітні
              тенденції у світі мистецтва та літератури та роздуми про глибинні
              філософські питання.
            </p>
          </div>
          <div class="flex gap-4">
            <NuxtLink :to="localePath('/', $i18n.locale)">
              <Button name="на головну" class="border text-dark border-dark" />
            </NuxtLink>
            <!-- <NuxtLink :to="localePath('/journal/view', $i18n.locale)"> -->
            <Button
              name="дивитись"
              class="bg-dark text-light"
              @click="store.toggleGatherPages"
            />
            <!-- </NuxtLink> -->
          </div>
        </div>
      </div>
    </transition>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
.swiper-slide-active {
  @apply z-20;
}
.fade-enter-from {
  @apply opacity-0;
}
.fade-enter-to {
  @apply opacity-100;
}
.fade-enter-active {
  @apply transition-all duration-1000 ease-in-out;
}

.fade-leave-from {
  @apply opacity-100;
}
.fade-leave-to {
  @apply opacity-0;
}
</style>

<script lang="ts" setup>
import { useClientStore } from '../../stores/client'
const localePath = useLocalePath()

const store = useClientStore()
</script>
