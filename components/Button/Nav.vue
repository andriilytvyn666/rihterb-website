<template>
  <a :href="link" target="_blank" class="nav-button">
    <nuxt-icon :name="`social/${icon}`" filled class="text-xl" />
    <span>{{ props.name }}</span>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  icon: string
  link: string
}>()
</script>

<style lang="postcss">
.nav-button {
  @apply text-light hover:bg-dark-hover text-lg;
  @apply flex gap-3 items-center py-3 px-4 rounded-lg;
  @apply transition ease-in-out duration-300;
}
</style>
