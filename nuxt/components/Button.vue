<template>
  <button
    class="flex items-center justify-center w-full gap-4 px-6 py-4 rounded-lg text-body-md-500 sm:w-fit"
  >
    <slot />
    {{ name }}
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  name?: string
}>()
</script>
