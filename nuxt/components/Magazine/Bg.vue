<template>
  <div class="w-full outter">
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[0].asset._ref"
      w="290"
      h="375"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-1 top-5 -rotate-12'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[2].asset._ref"
      w="373"
      h="483"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : 'left-[14rem] top-[6.5rem] rotate-6'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[7].asset._ref"
      w="448"
      h="346"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-[32rem] -top-4 -rotate-6'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[5].asset._ref"
      w="275"
      h="351"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-0 bottom-[12rem] rotate-3'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[6].asset._ref"
      w="350"
      h="453"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : 'left-[10rem] bottom-[-5rem] -rotate-12'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[1].asset._ref"
      w="333"
      h="431"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-[32rem] top-[46rem] rotate-6'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[4].asset._ref"
      w="322"
      h="418"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-[64rem] top-0 rotate-6'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[9].asset._ref"
      w="309"
      h="400"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : 'left-[54rem] top-[45rem] -rotate-6'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[11].asset._ref"
      w="311"
      h="402"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-[77rem] top-[34rem] rotate-6'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[8].asset._ref"
      w="374"
      h="484"
      :class="`${
        clientStore.gatherPages ? 'center' : 'left-[85rem] top-[5rem] -rotate-1'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[3].asset._ref"
      w="317"
      h="448"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : 'left-[100rem] top-[9rem] rotate-12'
      }`"
    />
    <SanityImage
      rel="preload"
      :asset-id="magazine.pages[10].asset._ref"
      w="323"
      h="456"
      :class="`${
        clientStore.gatherPages
          ? 'center'
          : 'left-[100rem] top-[38rem] -rotate-12'
      }`"
    />
  </div>
</template>

<script lang="ts" setup>
const clientStore = useClientStore()
const store = useSanityStore()
const magazine = await store.getMagazinePage()
</script>

<style lang="postcss" scoped>
.center {
  @apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 opacity-0;
}

.outter {
  @apply w-[120rem] h-[67.5rem];
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

img {
  @apply transition-all duration-300 ease-in-out;
}
</style>
