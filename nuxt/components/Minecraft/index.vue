<template>
  <div
    class="flex flex-col items-center justify-between gap-8 p-8 overflow-hidden rounded-lg bg-dark-alt"
  >
    <div class="hidden sm:block">
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
        class="h-[20.5rem]"
      >
        <SwiperSlide
          v-for="image in minecraft.images"
          :key="image.asset._ref"
          class="page"
        >
          <SanityImage
            rel="preload"
            height="327"
            :asset-id="image.asset._ref"
            class="image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <SanityImage
      :asset-id="minecraftPage.image.asset._ref"
      class="object-cover rounded-lg aspect-square shadow-default sm:hidden"
    />
    <div
      class="flex flex-col justify-between w-full gap-8 sm:gap-0 sm:flex-row"
    >
      <div class="flex flex-col gap-8 sm:flex-row">
        <div class="flex flex-col justify-center gap-2">
          <h2 class="line-clamp-2 sm:line-clamp-1 w-fit section-title">
            {{ getLocalizedString($i18n.locale, minecraft.title) }}
          </h2>
          <p class="line-clamp-2 sm:line-clamp-1 section-text">
            {{ getLocalizedString($i18n.locale, minecraft.text) }}
          </p>
        </div>
      </div>
      <Button
        :to="localePath('/minecraft', $i18n.locale)"
        :name="getLocalizedString($i18n.locale, minecraft.buttonName)"
        class="btn-light h-fit"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const minecraft = (await store.getMainPage()).minecraft
const minecraftPage = await store.getMinecraftPage()
const localePath = useLocalePath()
</script>

<style lang="postcss">
#swiper {
  @apply grid gap-8 overflow-visible;
  @apply grid-cols-1 md:grid-cols-2;
}
</style>
