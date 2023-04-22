<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col md:flex-row gap-8 justify-center">
      <h2 class="text-hl-yellow text-h-lg-700 text-center md:hidden">
        {{ getLocalizedString($i18n.locale, album.title) }}
      </h2>

      <div class="flex flex-col gap-8 items-center md:w-[23.5rem]">
        <SanityImage
          rel="preload"
          :asset-id="album.image.asset._ref"
          class="rounded-lg shadow-default aspect-square w-[20.875rem] md:w-full"
        />
        <div class="flex w-full gap-4 text-dark">
          <NuxtLink :to="localePath('/magazine', $i18n.locale)" class="w-full">
            <Button
              class="bg-light sm:w-full"
              :name="
                getLocalizedString($i18n.locale, album.buttons.magazine.name)
              "
            />
          </NuxtLink>
          <NuxtLink :to="album.buttons.listen.link" class="w-full">
            <Button
              class="bg-hl-yellow sm:w-full"
              :name="
                getLocalizedString($i18n.locale, album.buttons.listen.name)
              "
            />
          </NuxtLink>
        </div>
        <div class="flex flex-col text-center md:text-left">
          <div class="flex flex-col gap-5 text-body-lg-600">
            <h2
              class="text-hl-yellow text-h-lg-700 hidden md:text-center md:inline"
            >
              {{ getLocalizedString($i18n.locale, album.title) }}
            </h2>
            <SanityContent
              :blocks="getLocalizedPortableText($i18n.locale, album.text)"
            />
          </div>
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
const store = useSanityStore()
const album = await store.getAlbumPage()
const localePath = useLocalePath()
</script>
