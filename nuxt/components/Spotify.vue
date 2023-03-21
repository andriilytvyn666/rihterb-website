<template>
  <div class="w-full h-full overflow-hidden min-h-[24rem]">
    <iframe
      style="border-radius: 12px"
      class="h-[36rem] md:h-full"
      :src="props.link"
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
  link: string
}>()
</script>
