<template>
  <NuxtLayout name="wrapper">
    <div v-for="block in blocks.order" :key="block.name">
      <About
        v-if="block.name == 'About' && block.visible"
        class="mb-4 sm:mb-6"
      />
      <Movie
        v-if="block.name == 'Movie' && block.visible"
        class="my-4 sm:my-6"
      />
      <Album
        v-if="block.name == 'Album' && block.visible"
        class="my-4 sm:my-6"
      />
      <Magazine
        v-if="block.name == 'Magazine' && block.visible"
        class="my-4 sm:my-6"
      />
      <Support
        v-if="block.name == 'Support' && block.visible"
        class="my-4 sm:my-6"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const store = useSanityStore()

const blocks = await store.getWebsiteBlocks()
</script>
