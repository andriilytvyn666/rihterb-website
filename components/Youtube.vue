<template>
  <iframe
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
    :delay="200"
    id="youtube-player"
    class="w-full h-[16rem] rounded-lg"
    src="https://www.youtube-nocookie.com/embed/sTOCdJFvKYs"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</template>

<style lang="postcss">
@screen sm {
  #youtube-player {
    @apply h-[20rem];
  }
}

@screen md {
  #youtube-player {
    @apply h-[14.8rem];
  }
}

@screen lg {
  #youtube-player {
    @apply h-[23rem];
  }
}

@screen xl {
  #youtube-player {
    @apply h-[26.93rem];
  }
}
</style>
