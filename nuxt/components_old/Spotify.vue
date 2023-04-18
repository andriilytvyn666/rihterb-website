<template>
  <div class="w-full md:min-h-[36rem] h-full overflow-hidden">
    <iframe
      style="border-radius: 12px"
      :class="`md:h-full  ${
        link.includes('embed/album') ? 'h-[36rem]' : 'h-[14.8rem]'
      }`"
      :src="props.link"
      width="100%"
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
