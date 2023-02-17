<template>
  <a
    :href="link"
    target="_blank"
    class="text-light flex gap-4 items-center py-3 px-4 hover:bg-dark-hover rounded-lg text-lg"
  >
    <nuxt-icon :name="`social/${icon}`" filled class="text-2xl" />
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
