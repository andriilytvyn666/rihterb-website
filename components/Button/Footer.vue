<template>
  <a
    :href="link"
    target="_blank"
    class="text-light-secondary hover:text-red-300 active:text-red-500"
  >
    <nuxt-icon :name="`social/${props.name}`" filled />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  link: string
}>()
</script>
