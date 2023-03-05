<template>
  <NuxtLayout name="second">
    <!-- <DebugIndicator /> -->
    <NavMobile />
    <SectionAbout />
    <SectionSupport v-motion-slide-visible-once-bottom />
    <SectionPost v-motion-slide-visible-once-bottom />
  </NuxtLayout>
</template>
