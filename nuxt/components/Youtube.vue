<template>
  <iframe
    id="youtube-player"
    class="w-full rounded-lg aspect-video"
    :src="`https://www.youtube.com/embed/${props.id}`"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</template>

<style lang="postcss"></style>

<script lang="ts" setup>
const props = defineProps<{
  id: string
}>()
</script>
