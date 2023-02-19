<template>
  <a :href="props.link" target="_blank" class="flex text-2xl text-bg">
    <nuxt-icon
      :name="`social/${props.icon}`"
      class="custom-listen-icon"
      filled
    />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  link: string
}>()
</script>

<style lang="postcss">
.custom-listen-icon {
  @apply hover:text-zinc-800 active:text-zinc-700;
  @apply transition ease-in-out duration-300;
}
</style>
