<template>
  <div class="flex flex-col gap-8 about-container">
    <div
      v-motion-slide-visible-once-right
      class="flex flex-col items-center gap-8 about-body"
    >
      <NuxtImg
        v-motion-slide-visible-once-left
        id="photo"
        src="/rihter_alt.webp"
        alt="Ріхтер"
        class="ml-[0.375rem] object-cover w-[18.75rem] h-[18.75rem] rounded-lg"
        width="300"
        height="300"
      />
      <AboutText />
    </div>
    <ButtonListenIcons />
  </div>
</template>

<style lang="postcss">
@screen md {
  .about-container {
  }

  .about-body {
    @apply flex-row justify-center;
  }

  #photo {
    @apply w-[18.75rem];
  }
}
</style>
