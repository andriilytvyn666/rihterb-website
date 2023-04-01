<template>
  <div class="flex flex-col gap-8 about-container" v-if="about !== undefined">
    <div v-motion-fade class="flex flex-col items-center gap-12 about-body">
      <AboutText
        :subtitle="getLocalizedString($i18n.locale, about.subtitle)"
        :name="getLocalizedString($i18n.locale, about.name)"
        class="flex md:hidden"
      />
      <NuxtImg
        id="photo"
        :src="about.photo.asset._ref"
        alt="Ріхтер"
        class="ml-[0.375rem] object-cover w-[18rem] h-[18rem] rounded-lg"
        width="300"
        height="300"
      />
      <div class="flex flex-col gap-5">
        <AboutText
          :name="getLocalizedString($i18n.locale, about.name)"
          :subtitle="getLocalizedString($i18n.locale, about.subtitle)"
          class="hidden md:flex"
        />
        <AboutDescription
          :text="getLocalizedString($i18n.locale, about.description)"
        />
      </div>
    </div>
    <ButtonListenIcons :items="about.links" v-motion-fade />
  </div>
</template>

<script setup lang="ts">
import { useSanityStore } from '../../stores/sanity'
const store = useSanityStore()
const about = await store.getAbout()
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
