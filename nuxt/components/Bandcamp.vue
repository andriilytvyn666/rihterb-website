<template>
  <div class="w-full h-full overflow-hidden md:min-h-[24rem]">
    <!--h-[49rem]-->
    <iframe
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="200"
      class="hidden w-full h-full md:block aspect-square"
      :src="`https://bandcamp.com/EmbeddedPlayer/album=${props.albumId}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`"
      seamless
    >
      <a href="https://vasilyrichter.bandcamp.com/album/--4">
        отрывки радости и счастья by рихтер
      </a>
    </iframe>
    <iframe
      class="w-full h-[7.5rem] md:hidden"
      :src="`https://bandcamp.com/EmbeddedPlayer/album=${props.albumId}/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/`"
      seamless
      ><a href="https://vasilyrichter.bandcamp.com/album/--4"
        >отрывки радости и счастья by рихтер</a
      ></iframe
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  albumId: string
}>()
</script>
