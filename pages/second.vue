<template>
  <NuxtLayout name="second">
    <DebugIndicator />
    <NavMobile v-motion-fade-visible-once />
    <SectionAbout v-motion-slide-visible-once-bottom />
    <SectionYoutubeGallery />
    <SectionSupport v-motion-slide-visible-once-bottom />
    <SectionPost v-motion-slide-visible-once-bottom />
  </NuxtLayout>
</template>
