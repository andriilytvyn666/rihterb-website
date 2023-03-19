<template>
  <NuxtLayout name="home">
    <!-- <DebugIndicator /> -->
    <NavMobile />
    <article
      class="z-0 mt-0 sm:mt-16 pb-16 sm:mx-auto w-fit mx-4 sm:w-[35rem] z-1"
      v-if="renderCondition"
    >
      <div class="flex flex-col items-center gap-8">
        <h1
          class="text-5xl font-bold text-white"
          v-motion-slide-visible-once-top
        >
          {{ getLocalizedString($i18n.locale, album.title) }}
        </h1>
        <div class="w-[19.5rem] h-0.5 bg-white" v-motion-fade-visible-once />
        <div
          class="flex flex-col items-center text-center text-xl text-white"
          v-motion-slide-visible-once-bottom
        >
          <p class="whitespace-pre-line">
            {{ getLocalizedString($i18n.locale, album.description) }}
          </p>
        </div>
        <NuxtImg
          v-motion-slide-visible-once-bottom
          :src="album.albumImage.asset._ref"
          alt="Cover"
          class="w-full rounded-lg"
        />
        <div class="w-full h-[29.5rem]" v-motion-slide-visible-once-bottom>
          <AlbumBandcampPlayer
            :albumId="album.albumId"
            v-if="album.player === 'bandcamp'"
          />
          <AlbumSpotifyPlayer
            :albumId="album.albumId"
            v-if="album.player === 'spotify'"
          />
        </div>
      </div>
    </article>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const query: string = groq`*[_type == "album"][0]
    {_id, logo, title, description, albumImage, player, albumId}`

const { data } = await useSanityQuery<AlbumPage>(query)

const album = data.value!

const renderCondition: boolean = album !== undefined && album !== null
</script>
