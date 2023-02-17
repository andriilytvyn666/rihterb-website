<template>
  <a
    :href="link"
    target="_blank"
    class="text-light-secondary hover:text-[#6a6a6a] active:text-[#5e5e5e]"
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
