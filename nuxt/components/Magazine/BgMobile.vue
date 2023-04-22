<template>
  <div class="outter w-full">
    <NuxtImg
      rel="preload"
      src="magazine/mobile/1.webp"
      :class="`${store.gatherPages ? 'center' : 'left-8 -top-12 -rotate-6'}`"
    />
    <NuxtImg
      rel="preload"
      src="magazine/mobile/2.webp"
      :class="`${
        store.gatherPages ? 'center' : '-right-[2rem] top-[0rem] rotate-[20deg]'
      }`"
    />

    <NuxtImg
      rel="preload"
      src="magazine/mobile/3.webp"
      :class="`${
        store.gatherPages ? 'center' : '-left-[1rem] top-28 -rotate-[8deg]'
      }`"
    />

    <NuxtImg
      rel="preload"
      src="magazine/mobile/4.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[0rem] -bottom-[2rem] rotate-6'
      }`"
    />

    <NuxtImg
      rel="preload"
      src="magazine/mobile/5.webp"
      :class="`${
        store.gatherPages
          ? 'center'
          : '-right-[12rem] bottom-[16rem] -rotate-12'
      }`"
    />
    <NuxtImg
      rel="preload"
      src="magazine/mobile/6.webp"
      :class="`${
        store.gatherPages ? 'center' : '-left-8 bottom-[14rem] rotate-3'
      }`"
    />
    <NuxtImg
      rel="preload"
      src="magazine/mobile/8.webp"
      :class="`${
        store.gatherPages
          ? 'center'
          : '-right-[3.5rem] -bottom-[2rem] rotate-12'
      }`"
    />
    <NuxtImg
      rel="preload"
      src="magazine/mobile/7.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[7rem] -bottom-4 -rotate-[2deg]'
      }`"
    />
  </div>
</template>

<script lang="ts" setup>
import { useClientStore } from '../../stores/client'

const store = useClientStore()
</script>

<style lang="postcss" scoped>
.center {
  @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0;
}

.outter {
  @apply w-[26.875rem] h-[58.25rem];
  @apply [&>*]:shadow-default [&>*]:absolute;
  @apply fixed;
  @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
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
</style>
