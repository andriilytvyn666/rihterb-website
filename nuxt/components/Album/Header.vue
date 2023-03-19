<template>
  <header
    v-motion-fade-visible-once
    class="sticky top-0 flex items-center justify-center z-10 h-24 bg-[#1a1a1a]"
    v-if="renderCondition"
  >
    <AlbumNav class="hidden md:flex" />
    <AlbumMenuIcon />
    <NuxtImg
      :src="album.logo.asset._ref"
      alt="Logo"
      width="82"
      class="w-10 h-10"
    />
  </header>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "album"][0]
    {_id, logo, title, description, albumImage, player, albumId}`

const { data } = await useSanityQuery<AlbumPage>(query)

const album = data.value!

const renderCondition: boolean = album !== undefined && album !== null
</script>
