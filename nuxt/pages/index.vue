<template>
  <div class="flex items-center justify-center grow">
    <div
      class="grid grid-cols-1 gap-6 mx-4 md:mx-6 lg:gap-8 xl:gap-8 2xl:gap-12 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-fit"
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
      <!-- <div
      class="w-[400px] h-[400px] rounded-2xl bg-gray-700 flex g items-center justify-center text-white"
      :key="i"
      v-for="i in [...Array(32).keys()]"
    >
      hello
    </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const homepage = await store.getHomepage()

useSeoMeta({
  title: 'Ріхтер',
})
</script>
