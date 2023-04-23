<template>
  <div class="outter w-full">
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[9].asset._ref"
      w="226"
      h="292"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-8 -top-12 -rotate-6'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[3].asset._ref"
      w="206"
      h="291"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : '-right-[2rem] top-[0rem] rotate-[20deg]'
      }`"
    />

    <SanityImage
      rel="preload"
      w="282"
      h="218"
      :asset-id="magazine.pages[7].asset._ref"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : '-left-[1rem] top-28 -rotate-[8deg]'
      }`"
    />

    <SanityImage
      rel="preload"
      w="251"
      h="325"
      :asset-id="magazine.pages[10].asset._ref"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : 'left-[0rem] -bottom-[2rem] rotate-6'
      }`"
    />

    <SanityImage
      rel="preload"
      w="322"
      h="418"
      :asset-id="magazine.pages[4].asset._ref"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : '-right-[12rem] bottom-[16rem] -rotate-12'
      }`"
    />
    <SanityImage
      w="226"
      h="320"
      rel="preload"
      :asset-id="magazine.pages[1].asset._ref"
      :class="`${
        clientStore.gatherPages ? 'center' : '-left-8 bottom-[14rem] rotate-3'
      }`"
    />
    <SanityImage
      w="230"
      h="298"
      rel="preload"
      :asset-id="magazine.pages[2].asset._ref"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : '-right-[3.5rem] -bottom-[2rem] rotate-12'
      }`"
    />
    <SanityImage
      w="201"
      h="260"
      rel="preload"
      :asset-id="magazine.pages[0].asset._ref"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : 'left-[7rem] -bottom-4 -rotate-[2deg]'
      }`"
    />
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const clientStore = useClientStore()
const magazine = await store.getMagazinePage()
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
