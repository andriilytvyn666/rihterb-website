<template>
  <div
    class="custom-support-button bg-[#EA6350]"
    v-if="props.type == 'patreon'"
  >
    <nuxt-icon name="social/patreon" class="text-2xl" filled />
    <span class="whitespace-nowrap">Patreon</span>
  </div>
  <div class="custom-support-button bg-[#1E88E5]" v-if="props.type == 'diaka'">
    <img src="~/assets/img/diaka.png" alt="Diaka" />
    <span class="whitespace-nowrap">Diaka</span>
  </div>
  <div
    class="custom-support-button bg-[#1DA0C3]"
    v-if="props.type == 'bandcamp'"
  >
    <nuxt-icon name="social/bandcamp" class="text-2xl" filled />
    <span class="whitespace-nowrap">Bandcamp</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  type: string
}>()
</script>

<style lang="postcss">
.custom-support-button {
  @apply rounded-lg px-6 flex items-center gap-3 w-[11rem] py-[0.875rem] text-light;
  @apply text-lg font-medium;
}
</style>
