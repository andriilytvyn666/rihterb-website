<template>
  <NuxtLayout name="nowrapper">
    <MagazineBg class="opacity-0 sm:opacity-100" />
    <MagazineBgMobile class="sm:opacity-0" />
    <transition name="scale">
      <div
        class="z-10 w-full flex grow items-center justify-center overflow-visible"
        v-if="store.gatherPages"
      >
        <div
          :class="`flex flex-col grow gap-5 overflow-visible items-center ${
            store.gatherPages ? 'bg-dark' : ''
          }`"
        >
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1"
            :space-between="32"
            :navigation="{
              nextEl: '#swiper-next',
              prevEl: '#swiper-prev',
              disabledClass: 'opacity-0',
            }"
            class="w-screen h-full md:w-[59rem] items-center flex grow justify-center md:h-[45.625rem] overflow-visible"
          >
            <SwiperSlide
              v-for="page in magazine.pages"
              :key="page.asset._ref"
              class="px-4 sm:px-0 flex justify-center grow items-center overflow-visible"
            >
              <SanityImage
                :asset-id="page.asset._ref"
                h="730"
                class="sm:h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
          <div
            class="flex grow gap-4 px-4 sm:px-0 w-screen sm:w-[35rem] max-h-[3.75rem]"
          >
            <button
              id="swiper-prev"
              class="min-w-[3.75rem] hover:bg-dark-alt min-h-[3.75rem] flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
            >
              <NuxtIcon name="feather/arrow-left" filled class="w-6 h-6" />
            </button>
            <Button
              :name="t('magazine.back')"
              class="hover:bg-dark-alt border border-dark-border sm:w-full"
              @click="store.toggleGatherPages"
            />
            <button
              id="swiper-next"
              class="min-w-[3.75rem] hover:bg-dark-alt min-h-[3.75rem] flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
            >
              <NuxtIcon name="feather/arrow-right" filled class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div
        class="h-full w-full grow flex items-center justify-center fixed"
        v-if="!store.gatherPages"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto px-4"
        >
          <div
            :class="`duration-600 bg-light shadow-default p-8 gap-8 flex w-full flex-col items-center sm:w-[38rem] rounded-lg`"
          >
            <div class="gap-5 flex flex-col items-center">
              <h2 class="text-h-lg-700 text-hl-blue line-clamp-1">
                {{ getLocalizedString($i18n.locale, magazine.title) }}
              </h2>
              <p class="text-body-md-500 text-dark text-center line-clamp-4">
                {{ getLocalizedString($i18n.locale, magazine.text) }}
              </p>
            </div>
            <div class="flex gap-4 flex-col sm:flex-row w-full">
              <Button
                :name="t('magazine.view')"
                class="bg-dark text-light sm:w-full hover:bg-dark-alt hover:scale-100"
                @click="store.toggleGatherPages"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </NuxtLayout>
</template>

<style lang="postcss">
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

.scale-enter-from {
  @apply scale-0;
}
.scale-enter-to {
  @apply scale-100;
}
.scale-enter-active {
  @apply transition-all delay-75 duration-700 ease-in-out;
}

.scale-leave-from {
  @apply scale-100;
}
.scale-leave-to {
  @apply scale-0;
}
</style>

<script lang="ts" setup>
const { t } = useI18n()

const store = useClientStore()

const sanityStore = useSanityStore()
const magazine = await sanityStore.getMagazinePage()
</script>
