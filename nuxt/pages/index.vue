<template>
  <div class="flex overflow-x-hidden justify-center items-center grow">
    <div
      :class="`grid grid-cols-1 gap-6 mx-4 md:mx-6 md:gap-8 xl:gap-8 2xl:gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ${homepage.blocks.length >= 4 ? ' 2xl:grid-cols-4' : '2xl:flex'} w-fit`"
    >
      <About
        :image="homepage.about.image"
        :name="homepage.about.name"
        :subtitle="homepage.about.subtitle"
        :buttons="homepage.about.buttons"
      />
      <Card
        v-for="block in homepage.blocks"
        :key="block.title.en"
        :top="block.textOnTop"
        :image="block.image"
        :title="block.title"
        :description="block.description"
        :button="block.button"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const homepage = await store.getHomepage()
</script>
