<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col justify-center gap-8 my-auto md:flex-row">
      <h2 class="text-center text-hl-yellow text-h-lg-700 md:hidden">
        {{ getLocalizedString($i18n.locale, album.title) }}
      </h2>
      <div
        class="flex flex-col gap-8 items-center justify-center md:w-[23.5rem]"
      >
        <!-- <SanityImage
          rel="preload"
          :asset-id="album.image.asset._ref"
          class="rounded-lg shadow-default aspect-square w-[20.875rem] md:w-full"
        /> -->
        <div class="flex flex-col text-left">
          <div class="flex flex-col gap-5 text-body-md-600 lg:text-body-md-600">
            <h2 class="hidden section-title md:text-center md:inline">
              {{ getLocalizedString($i18n.locale, album.title) }}
            </h2>
            <SanityContent
              :blocks="getLocalizedPortableText($i18n.locale, album.text)"
            />
          </div>
        </div>
        <div class="flex flex-col w-full gap-4 sm:flex-row text-dark">
          <Button
            class="btn-light sm:w-full hover:-translate-y-1"
            :to="localePath('/magazine', $i18n.locale)"
            :name="
              getLocalizedString($i18n.locale, album.buttons.magazine.name)
            "
          >
            <NuxtIcon name="feather/image" filled />
          </Button>
          <Button
            :to="album.buttons.listen.link"
            class="btn-highlight sm:w-full hover:-translate-y-1"
            :name="getLocalizedString($i18n.locale, album.buttons.listen.name)"
          >
            <NuxtIcon name="feather/music" filled />
          </Button>
        </div>
      </div>
      <iframe
        class="w-full md:w-[28.75rem] min-h-[30rem]"
        style="border-radius: 12px"
        :src="`https://open.spotify.com/embed/album/${
          album.spotifyLink.split('/').slice(-1)[0].split('?')[0]
        }?utm_source=generator&theme=0`"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()

const sanityStore = useSanityStore()
const album = await sanityStore.getAlbumPage()
</script>
