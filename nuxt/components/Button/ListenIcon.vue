<template>
  <a :href="props.link" target="_blank" class="custom-listen-icon">
    <nuxt-icon class="text-2xl" :name="`social/${props.icon}`" filled />
    <span class="text-xl whitespace-nowrap text-light">
      {{ props.name }}
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  link: string
  name: string
}>()
</script>

<style lang="postcss">
.custom-listen-icon {
  @apply flex lg:px-6 px-4 py-4 rounded-lg;
  @apply transition ease-in-out duration-300;
  @apply items-center gap-4;
  @apply bg-dark-hover border border-dark-hover;
  @apply hover:border-light-secondary;
}
</style>
