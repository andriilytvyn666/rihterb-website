<template>
  <div class="grid grid-cols-4 gap-12 py-24 mx-auto my-auto w-fit">
    <About
      :image="homepage.about.image"
      :name="homepage.about.name.uk"
      :subtitle="homepage.about.subtitle.uk"
      :buttons="homepage.about.buttons"
    />
    <Card
      v-for="block in homepage.blocks"
      :key="block.title.en"
      :top="block.textOnTop"
      :image="block.image"
      :title="block.title.uk"
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
</template>

<script lang="ts" setup>
const store = useSanityStore()
const homepage = await store.getHomepage()
</script>
