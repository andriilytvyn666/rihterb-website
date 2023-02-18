<template>
  <div
    class="min-[320px]:max-sm:flex-col min-[320px]:max-sm:items-center flex gap-8 min-[320px]:max-sm:gap-4"
  >
    <NuxtImg
      v-motion-slide-visible-once-left
      src="/photo.webp"
      alt="Ріхтер"
      class="ml-[0.375rem] min-[320px]:max-md:object-cover min-[320px]:max-md:w-[200px] w-[300px] h-[300px] rounded-lg"
      width="300"
      height="300"
    />
    <div
      class="flex flex-col justify-between min-[320px]:max-sm:gap-8 min-[320px]:max-sm:items-center"
    >
      <AboutText
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1 }"
        :delay="100"
      />
      <ButtonListen
        class="min-[320px]:max-sm"
        v-motion-slide-visible-once-bottom
      />
    </div>
  </div>
</template>
