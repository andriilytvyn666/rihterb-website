<template>
  <NuxtLayout name="magazine">
    <MagazineBg class="opacity-0 sm:opacity-100" />
    <MagazineBgMobile class="sm:opacity-0" />
    <transition name="scale">
      <div
        class="z-10 w-full flex grow items-center justify-center"
        v-if="clientStore.gatherPages"
      >
        <div class="flex flex-col grow gap-5 items-center">
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1"
            :space-between="32"
            :navigation="{
              nextEl: '#swiper-next',
              prevEl: '#swiper-prev',
              disabledClass: 'opacity-0',
            }"
            class="w-[22rem] h-full md:w-[59rem] md:h-[40rem]"
          >
            <SwiperSlide
              v-for="page in magazine.pages"
              :key="page.asset._ref"
              class="px-4 sm:px-0 flex justify-center grow items-center sm:min-h-fit min-h-[28rem]"
            >
              <SanityImage
                :asset-id="page.asset._ref"
                h="730"
                class="sm:h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
          <MagazineControl />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <MagazineGreeter v-if="!clientStore.gatherPages" />
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
const clientStore = useClientStore()

const store = useSanityStore()
const magazine = await store.getMagazinePage()
</script>
