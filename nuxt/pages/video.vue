<template>
  <div class="flex flex-col justify-center md:grow">
    <div class="flex md:grow bg-fg2 md:aspect-auto aspect-square">
      <iframe
        class="w-full"
        :src="getYtEmbedLink(video.youtubeLink)"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
    <div class="flex flex-col gap-2 mx-4 mt-4 md:hidden">
      <h1 class="text-caption text-accent font-inter">
        {{ getLocalizedString($i18n.locale, video.title) }}
      </h1>
      <span class="whitespace-pre-line text-body">
        {{ getLocalizedString($i18n.locale, video.text) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const video = await sanityStore.getVideoPage()

const getYtEmbedLink = (link: string) => {
  if (
    link.startsWith('https://youtube.com') ||
    link.startsWith('https://www.youtube.com')
  ) {
    return `https://www.youtube-nocookie.com/embed/${
      link.split('/')[3].split('=')[1].split('?')[0]
    }`
  }

  if (
    link.startsWith('https://youtu.be') ||
    link.startsWith('https://www.youtu.be')
  ) {
    return `https://www.youtube-nocookie.com/embed/${link.split('/')[3]}`
  }
}

useSeoMeta({
  title: 'Ріхтер',
})
</script>
