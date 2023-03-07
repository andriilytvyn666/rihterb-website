<template>
  <iframe
    class="w-full h-[29.5rem] border-none"
    :src="`https://bandcamp.com/EmbeddedPlayer/album=${props.albumId}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`"
    seamless
  >
    <a href="https://vasilyrichter.bandcamp.com/album/--5"
      >концерт у Львові (архів андерграунд музики) by рихтер</a
    >
  </iframe>
</template>

<script lang="ts" setup>
const props = defineProps<{
  albumId: string
}>()
</script>
