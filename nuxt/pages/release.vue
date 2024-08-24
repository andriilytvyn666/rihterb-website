<template>
  <div
    class="flex flex-col-reverse justify-center gap-4 px-4 md:gap-8 md:my-auto md:flex-row md:px-6"
  >
    <div class="w-fit md:max-w-[25rem] flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <h1 class="text-accent font-inter text-caption">
          {{ getLocalizedString($i18n.locale, release.title) }}
        </h1>
        <span class="whitespace-pre-line text-body">{{
          getLocalizedString($i18n.locale, release.description)
        }}</span>
      </div>
      <div
        class="[&>*]:w-full lg:[&>*]:w-fit grid grid-cols-2 [&>:nth-child(3)]:col-span-2 lg:flex gap-2"
      >
        <ButtonLink
          v-for="button in release.buttons"
          :key="button.title.en"
          :open-in-new-tab="button.openInNewTab"
          :link="button.link"
          :primary="button.primary"
          :icon="button.icon"
          :title="getLocalizedString($i18n.locale, button.title)"
        />
      </div>
      <div
        class="sm:max-w-[25rem] border rounded-2xl aspect-square overflow-clip border-bg1 shrink-0 hidden md:flex"
      >
        <NuxtImg
          provider="sanity"
          sizes="600px sm:800px lg:600px"
          :quality="100"
          :src="release.cover.asset._ref"
          class="w-full h-full"
          alt="Release Cover"
        />
      </div>
    </div>
    <div class="md:max-w-[25rem]">
      <iframe
        class="w-full md:min-w-[25rem] md:min-h-[25rem] min-h-[100vw] h-full aspect-square"
        style="border-radius: 12px"
        :src="`https://open.spotify.com/embed/album/${
          release.spotifyLink.split('/').slice(-1)[0].split('?')[0]
        }?utm_source=generator&theme=0`"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  path: '/release',
  alias: ['/ep', '/album', '/single'],
})

const store = useSanityStore()
const release = await store.getReleasePage()
</script>
