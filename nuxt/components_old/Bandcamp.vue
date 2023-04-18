<template>
  <div class="w-full h-full overflow-hidden md:min-h-[24rem]">
    <!--h-[49rem]-->
    <iframe
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="200"
      class="hidden w-full h-full md:block aspect-square"
      :src="props.link"
      seamless
    >
      <a href="props.bandcampLink"> отрывки радости и счастья by рихтер </a>
    </iframe>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  link: string
  bandcampLink: string
}>()
</script>
