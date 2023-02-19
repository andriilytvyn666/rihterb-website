<template>
  <iframe
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
    :delay="200"
    id="youtube-player"
    class="w-full rounded-lg aspect-video"
    src="https://www.youtube-nocookie.com/embed/sTOCdJFvKYs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</template>

<style lang="postcss"></style>
