<template>
  <div class="w-full h-full overflow-hidden min-h-[24rem]">
    <iframe
      style="border-radius: 12px"
      class="h-[36rem] md:h-full"
      :src="`https://open.spotify.com/embed/album/${props.albumId}?utm_source=generator&theme=0`"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  albumId: string
}>()
</script>
