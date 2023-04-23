<template>
  <a
    :href="link"
    target="_blank"
    class="text-dark-secondary hover:text-light-secondary"
  >
    <nuxt-icon :name="`social/${name}`" filled />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  link: string
}>()
</script>
