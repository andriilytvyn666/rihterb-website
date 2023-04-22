<template>
  <NuxtLayout name="wrapper">
    <About />
    <Album />
    <Magazine />
    <Minecraft />
    <Support />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const store = useSanityStore()

// TODO: try to split global fetch
await store.getMainPage()
await store.getSupportPage()
await store.getMinecraftPage()
await store.getAlbumPage()
await store.getMagazinePage()
</script>
