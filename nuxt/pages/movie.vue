<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col items-center gap-8">
      <div
        class="flex flex-col items-center gap-5 w-full sm:w-[43.75rem] text-body-lg-600 text-center"
      >
        <h2 class="section-title">
          {{ getLocalizedString($i18n.locale, movie.title) }}
        </h2>
        <!-- <SanityContent
          :blocks="getLocalizedPortableText($i18n.locale, movie.text)"
          class=""
        /> -->
      </div>
      <iframe
        class="w-full rounded-lg aspect-video shadow-default sm:w-[43.75rem]"
        width="700"
        :src="`https://www.youtube-nocookie.com/embed/${
          movie.youtubeLink.split('/')[3].split('=')[1].split('?')[0]
        }`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div
        class="flex flex-col sm:flex-row gap-4 [&>*]:w-full w-full sm:w-[43.75rem]"
      >
        <Button name="слухати альбом" class="btn-dark-outline">
          <NuxtIcon name="feather/music" filled />
        </Button>
        <Button name="дивитися журнал" class="btn-dark-outline">
          <NuxtIcon name="feather/image" filled />
        </Button>
      </div>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const store = useSanityStore()
const movie = await store.getMoviePage()
</script>
