<template>
  <NuxtLayout name="wrapper">
    <div class="grid justify-center w-full gap-8 lg:grid-cols-2 md:flex-row">
      <div class="flex flex-col w-full gap-8 text-body-lg-600">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-5">
            <h2 class="text-center section-title">
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
              class="ml-5 list-disc"
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
            class="sm:w-full btn-light hover:-translate-y-0.5"
          >
            <NuxtIcon name="feather/copy" filled class="text-[1.5rem]" />
          </Button>
          <Button
            :to="localePath('/minecraft/monitoring', $i18n.locale)"
            :name="
              getLocalizedString($i18n.locale, minecraftPage.buttons.monitoring)
            "
            class="btn-dark-outline sm:w-full hover:-translate-y-0.5"
          >
            <NuxtIcon name="feather/bar-chart-2" class="text-[1.5rem]" filled />
          </Button>
          <Button
            @click="isMap = !isMap"
            :name="
              getLocalizedString($i18n.locale, minecraftPage.buttons.map.name)
            "
            class="sm:w-full btn-dark-outline hover:-translate-y-0.5"
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
            class="sm:w-full btn-dark-outline hover:-translate-y-0.5"
          >
            <NuxtIcon name="social/discord" class="text-[1.5rem]" filled />
          </Button>
        </div>
      </div>
      <SanityImage
        :asset-id="minecraftPage.image.asset._ref"
        h="900"
        class="object-cover w-full h-full sm:h-[43.875rem] rounded-lg aspect-square md:aspect-auto"
        v-show="!isMap"
      />
      <iframe
        src="https://rihterb.my.pebble.host"
        class="w-full h-full sm:h-[43.875rem] rounded-lg aspect-square sm:aspect-video"
        v-show="isMap"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const isMap = ref(false)
const store = useSanityStore()
const minecraftPage = await store.getMinecraftPage()

const localePath = useLocalePath()

const copyToClipboard = () => {
  navigator.clipboard.writeText('rihterb.my.pebble.host')
}
</script>
