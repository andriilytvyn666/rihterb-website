<template>
  <div class="outter">
    <transition name="fade">
      <NuxtImg
        src="cover.webp"
        class="z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        v-if="store.gatherPages"
      />
    </transition>
    <NuxtImg
      src="journal_desktop/1.webp"
      :class="`${store.gatherPages ? 'center' : 'left-1 top-5 -rotate-12'}`"
    />
    <NuxtImg
      src="journal_desktop/2.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[14rem] top-[6.5rem] rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/3.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[32rem] -top-4 -rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/4.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-0 bottom-[12rem] rotate-3'
      }`"
    />
    <NuxtImg
      src="journal_desktop/5.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[10rem] bottom-[-5rem] -rotate-12'
      }`"
    />
    <NuxtImg
      src="journal_desktop/6.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[32rem] top-[46rem] rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/7.webp"
      :class="`${store.gatherPages ? 'center' : 'left-[64rem] top-0 rotate-6'}`"
    />
    <NuxtImg
      src="journal_desktop/8.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[54rem] top-[45rem] -rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/10.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[77rem] top-[34rem] rotate-6'
      }`"
    />
    <NuxtImg
      src="journal_desktop/9.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[85rem] top-[5rem] -rotate-1'
      }`"
    />
    <NuxtImg
      src="journal_desktop/11.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[100rem] top-[9rem] rotate-12'
      }`"
    />
    <NuxtImg
      src="journal_desktop/12.webp"
      :class="`${
        store.gatherPages ? 'center' : 'left-[100rem] top-[38rem] -rotate-12'
      }`"
    />
  </div>

  <Button
    @click="store.gatherPages = !store.gatherPages"
    name="anim"
    class="bg-light text-dark fixed bottom-0 left-0 shadow-default"
  />
</template>

<script lang="ts" setup>
import { useClientStore } from '../../stores/client'

const store = useClientStore()
</script>

<style lang="postcss" scoped>
.center {
  @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0;
}

.size-close {
  @apply h-screen;
}

.outter {
  @apply w-[120rem] h-[67.5rem];
  @apply [&>*]:shadow-default [&>*]:absolute;
  @apply absolute;
  @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
.fade-enter-from {
  @apply opacity-0;
}
.fade-enter-to {
  @apply opacity-100;
}
.fade-enter-active {
  @apply transition-all duration-300 ease-in-out;
  @apply delay-100;
}

.fade-leave-from {
  @apply opacity-100;
}
.fade-leave-to {
  @apply opacity-0;
}
</style>
