<template>
  <div class="flex flex-col gap-8 about-container">
    <div
      v-motion-fade-visible-once
      class="flex flex-col items-center gap-8 about-body"
    >
      <AboutText class="flex md:hidden" />
      <NuxtImg
        id="photo"
        src="/rihter_alt.webp"
        alt="Ріхтер"
        class="ml-[0.375rem] object-cover w-[18.75rem] h-[18.75rem] rounded-lg"
        width="300"
        height="300"
      />
      <div class="flex flex-col gap-5">
        <AboutText class="hidden md:flex" />
        <AboutDescription />
      </div>
    </div>
    <ButtonListenIcons v-motion-fade-visible-once />
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
