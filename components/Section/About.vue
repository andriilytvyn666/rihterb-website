<template>
  <div class="flex flex-col items-center gap-4 about-container">
    <NuxtImg
      v-motion-slide-visible-once-left
      id="photo"
      src="/photo.webp"
      alt="Ріхтер"
      class="ml-[0.375rem] object-cover w-[18.75rem] h-[18.75rem] rounded-lg"
      width="300"
      height="300"
    />
    <div
      class="flex flex-col items-center justify-between gap-8 about-side post-side"
    >
      <AboutText
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1 }"
        :delay="100"
      />
      <ButtonListen v-motion-slide-visible-once-bottom />
    </div>
  </div>
</template>

<style lang="postcss">
@screen sm {
  .about-container {
    @apply flex-row items-stretch gap-8;
  }

  .about-side {
    @apply gap-0 items-start;
  }

  #photo {
  }
}

@screen sm {
  #photo {
    @apply w-[12.5rem];
  }
}

@screen md {
  #photo {
    @apply w-[18.75rem];
  }
}
</style>
