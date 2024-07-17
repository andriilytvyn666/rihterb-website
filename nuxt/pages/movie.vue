<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col items-center justify-center gap-8 my-auto">
      <iframe
        class="w-full rounded-lg aspect-video shadow-default"
        :src="getYtEmbedLink(movie.youtubeLink)"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const localePath = useLocalePath()

const sanityStore = useSanityStore()
const movie = await sanityStore.getMoviePage()

console.log(movie.youtubeLink.split('/')[3])

const getYtEmbedLink = (link: string) => {
  if (link.startsWith('https://youtube.com')) {
    return `https://www.youtube-nocookie.com/embed/${
      movie.youtubeLink.split('/')[3].split('=')[1].split('?')[0]
    }`
  }

  // https://youtu.be/SqsXu7z0iM0?si=Of9MV-KSFAQEzJoq
  if (link.startsWith('https://youtu.be')) {
    return `https://www.youtube-nocookie.com/embed/${
      movie.youtubeLink.split('/')[3]
    }`
  }
}
</script>
