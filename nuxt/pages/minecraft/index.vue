<template>
  <NuxtLayout name="wrapper">
    <div class="grid lg:grid-cols-2 md:flex-row gap-8 w-full justify-center">
      <div class="flex flex-col gap-8 w-full text-body-lg-600">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-5">
            <h2 class="section-title text-center">
              {{ getLocalizedString($i18n.locale, minecraftPage.title) }}
            </h2>
            <SanityContent
              :blocks="
                getLocalizedPortableText($i18n.locale, minecraftPage.text)
              "
            />
          </div>
          <div>
            <ul
              class="list-disc ml-5"
              v-for="li in minecraftPage.features"
              :key="li.en"
            >
              <li>{{ getLocalizedString($i18n.locale, li) }}</li>
            </ul>
          </div>
        </div>
        <div class="grid gap-4 w-full [&>*]:w-full">
          <Button
            name="rihterb.my.pebble.host"
            @click="copyToClipboard"
            class="sm:w-full btn-light"
          >
            <NuxtIcon name="feather/copy" filled class="text-[1.5rem]" />
          </Button>
          <Button
            :to="localePath('/minecraft/monitoring', $i18n.locale)"
            :name="
              getLocalizedString($i18n.locale, minecraftPage.buttons.monitoring)
            "
            class="btn-dark-outline sm:w-full"
          >
            <NuxtIcon name="feather/bar-chart-2" class="text-[1.5rem]" filled />
          </Button>
          <Button
            :to="minecraftPage.buttons.map.link"
            target="_blank"
            :name="
              getLocalizedString($i18n.locale, minecraftPage.buttons.map.name)
            "
            class="sm:w-full btn-dark-outline"
          >
            <NuxtIcon name="feather/map" class="text-[1.5rem]" filled />
          </Button>
          <Button
            :to="minecraftPage.buttons.discord.link"
            target="_blank"
            :name="
              getLocalizedString(
                $i18n.locale,
                minecraftPage.buttons.discord.name
              )
            "
            class="sm:w-full btn-dark-outline"
          >
            <NuxtIcon name="social/discord" class="text-[1.5rem]" filled />
          </Button>
        </div>
      </div>
      <SanityImage
        :asset-id="minecraftPage.image.asset._ref"
        h="1000"
        class="aspect-square md:aspect-auto md:h-full object-cover rounded-lg w-full"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const minecraftPage = await store.getMinecraftPage()

const localePath = useLocalePath()

const copyToClipboard = () => {
  navigator.clipboard.writeText('rihterb.my.pebble.host')
}
</script>
