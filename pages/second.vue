<template>
  <NuxtLayout name="second">
    <DebugIndicator />
    <NavMobile />
    <SectionAbout v-motion-slide-visible-once-bottom />
    <SectionYoutubeGallery />
    <SectionSupport v-motion-slide-visible-once-bottom />
    <SectionPost v-motion-slide-visible-once-bottom />
  </NuxtLayout>
</template>
