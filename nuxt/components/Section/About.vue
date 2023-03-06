<template>
  <div class="flex flex-col gap-8 about-container" v-if="renderCondition">
    <div
      v-motion-fade-visible-once
      class="flex flex-col items-center gap-8 about-body"
    >
      <AboutText class="flex md:hidden" />
      <NuxtImg
        id="photo"
        src="/rihter_alt.webp"
        alt="Ріхтер"
        class="ml-[0.375rem] object-cover w-[18.75rem] h-[18.75rem] rounded-lg"
        width="300"
        height="300"
      />
      <div class="flex flex-col gap-5">
        <AboutText class="hidden md:flex" />
        <AboutDescription :text="about.description.en" />
      </div>
    </div>
    <ButtonListenIcons v-motion-fade-visible-once />
  </div>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "about"][0]
    {_id, name, subtitle, description, links}`

const { data } = await useSanityQuery<About>(query)

const about = data.value!

const renderCondition: boolean = about !== undefined
</script>

<style lang="postcss">
@screen md {
  .about-container {
  }

  .about-body {
    @apply flex-row justify-center;
  }

  #photo {
    @apply w-[18.75rem];
  }
}
</style>
