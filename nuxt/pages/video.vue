<template>
  <div class="flex grow bg-fg2">
    <iframe
      class="w-full"
      :src="getYtEmbedLink('https://youtube.com/watch?v=SqsXu7z0iM0')"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
  <!-- <div class="flex flex-col h-full bg-fg-2 rounded-2xl overflow-clip">
    <iframe
      class="w-full h-full aspect-video"
      :src="getYtEmbedLink('https://youtube.com/watch?v=SqsXu7z0iM0')"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div> -->
</template>

<script lang="ts" setup>
// const sanityStore = useSanityStore()
// const movie = await sanityStore.getMoviePage()

const getYtEmbedLink = (link: string) => {
  if (
    link.startsWith('https://youtube.com') ||
    link.startsWith('https://www.youtube.com')
  ) {
    return `https://www.youtube-nocookie.com/embed/${
      link.split('/')[3].split('=')[1].split('?')[0]
    }`
  }

  // https://youtu.be/SqsXu7z0iM0?si=Of9MV-KSFAQEzJoq
  if (link.startsWith('https://youtu.be')) {
    return `https://www.youtube-nocookie.com/embed/${link.split('/')[3]}`
  }
}
</script>
