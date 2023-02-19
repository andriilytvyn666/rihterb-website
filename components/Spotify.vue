<template>
  <div class="w-full h-full overflow-hidden">
    <!-- <iframe
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="200"
      style="border-radius: 12px"
      class="hidden w-full h-full md:block"
      src="https://open.spotify.com/embed/album/0qiorHnzWjHAdWMqbSKe0s?utm_source=generator&theme=0"
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    /> -->
    <iframe
      style="border-radius: 12px"
      class="h-[22rem] md:h-full"
      src="https://open.spotify.com/embed/album/0qiorHnzWjHAdWMqbSKe0s?utm_source=generator&theme=0"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>
</template>
