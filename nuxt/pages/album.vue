<template>
  <NavMobile v-motion-fade-visible-once />
  <article
    class="z-0 mt-0 sm:mt-16 sm:mx-auto w-fit sm:w-[35rem] z-1"
    v-if="renderCondition"
  >
    <div class="flex flex-col items-center gap-8 selection:bg-light-secondary">
      <h1
        class="text-4xl font-bold text-white select-text"
        v-motion-slide-visible-once-top
      >
        {{ getLocalizedString($i18n.locale, album.title) }}
      </h1>
      <div class="w-[20rem] border-b bg-white" v-motion-fade-visible-once />
      <div
        class="flex flex-col items-center text-xl text-white"
        v-motion-slide-visible-once-bottom
      >
        <p class="font-semibold leading-snug whitespace-pre-line select-text">
          {{ getLocalizedString($i18n.locale, album.description) }}
        </p>
      </div>
      <NuxtImg
        v-motion-slide-visible-once-bottom
        :src="album.albumImage.asset._ref"
        alt="Cover"
        class="w-full rounded-lg"
      />
      <div class="w-full h-[36rem]" v-motion-slide-visible-once-bottom>
        <Bandcamp
          :link="album.link"
          :bandcamp-link="album.bandcampLink"
          v-if="album.player === 'bandcamp'"
        />
        <Spotify :link="album.link" v-if="album.player === 'spotify'" />
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
const query: string = groq`*[_type == "album"][0]
    {_id, logo, title, description, albumImage, player, link, bandcampLink}`

const { data } = await useSanityQuery<AlbumPage>(query)

const album = data.value!

const renderCondition: boolean = album !== undefined && album !== null
</script>
