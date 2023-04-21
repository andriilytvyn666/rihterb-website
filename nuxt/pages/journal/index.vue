<template>
  <NuxtLayout name="nowrapper">
    <JournalBg class="hidden sm:block" />
    <transition name="fade">
      <div
        class="z-10 w-full flex grow items-center justify-center overflow-visible"
        v-if="store.gatherPages"
      >
        <div class="flex flex-col grow gap-5 overflow-visible items-center">
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1"
            :space-between="32"
            :navigation="{
              nextEl: '#swiper-next',
              prevEl: '#swiper-prev',
              disabledClass: 'opacity-0',
            }"
            class="w-screen h-[36rem] sm:w-[59rem] items-center flex grow justify-center sm:h-[45.625rem] overflow-visible bg-dark"
          >
            <SwiperSlide
              v-for="i in 12"
              :key="i"
              class="px-4 sm:px-0 flex justify-center grow items-center overflow-visible"
            >
              <NuxtImg
                :src="`journal_view/${i}.webp`"
                class="sm:h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
          <div
            class="flex grow gap-4 px-4 sm:px-0 w-screen sm:w-[35rem] max-h-[3.75rem]"
          >
            <button
              id="swiper-prev"
              class="min-w-[3.75rem] min-h-[3.75rem] flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
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
              class="min-w-[3.75rem] min-h-[3.75rem] flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
            >
              <NuxtIcon name="feather/arrow-right" filled class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div
        class="h-full w-full grow flex items-center justify-center"
        v-if="!store.gatherPages"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto px-4"
        >
          <div
            :class="`duration-600 bg-light shadow-default p-8 gap-8 flex w-full flex-col items-center sm:w-[38rem] rounded-lg`"
          >
            <div class="gap-5 flex flex-col items-center">
              <h2 class="text-h-lg-700 text-hl-blue">журнал “дев’ять”</h2>
              <p class="text-body-md-500 text-dark text-center">
                У журналі "дев'ять" ви знайдете цікаві статті про новітні
                тенденції у світі мистецтва та літератури та роздуми про
                глибинні філософські питання.
              </p>
            </div>
            <div class="flex gap-4">
              <NuxtLink :to="localePath('/', $i18n.locale)">
                <Button
                  name="на головну"
                  class="border text-dark border-dark"
                />
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
