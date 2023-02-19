<!-- TODO: refactor this mess -->
<template>
  <a
    :href="props.link"
    target="_blank"
    class="custom-support-button bg-[#EA6350] hover:bg-[#ab4738] active:bg-[#943d31]"
    v-if="props.type == 'patreon'"
  >
    <nuxt-icon name="social/patreon" class="text-2xl" filled />
    <span class="whitespace-nowrap">Patreon</span>
  </a>
  <a
    :href="props.link"
    target="_blank"
    class="custom-support-button bg-[#1E88E5] hover:bg-[#1561a3] active:bg-[#11538c]"
    v-if="props.type == 'diaka'"
  >
    <NuxtImg src="/diaka.webp" alt="Diaka" width="26" height="24" />
    <span class="whitespace-nowrap">Diaka</span>
  </a>
  <a
    :href="props.link"
    target="_blank"
    class="custom-support-button bg-[#1DA0C3] hover:bg-[#15738c] active:bg-[#126278]"
    v-if="props.type == 'bandcamp'"
  >
    <nuxt-icon name="social/bandcamp" class="text-2xl" filled />
    <span class="whitespace-nowrap">Bandcamp</span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string
  link: string
}>()
</script>

<!-- w-[11rem] -->

<style lang="postcss">
.custom-support-button {
  @apply rounded-lg px-6 flex items-center gap-3 w-full h-fit  py-[0.875rem] text-light;
  @apply text-lg font-medium min-w-[11rem];
}
</style>
