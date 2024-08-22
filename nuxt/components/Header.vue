<template>
  <div class="flex justify-between w-full p-6 bg-[#000000]">
    <NuxtLink to="/" class="flex justify-center gap-3">
      <NuxtImg
        provider="sanity"
        :src="header.logo.asset._ref"
        :width="20"
        :height="20"
        format="webp"
        alt="logo"
        class="w-5 h-5"
      />
      <h1 class="text-[#F8A711] text-logo">
        {{ getLocalizedString($i18n.locale, header.title) }}
      </h1>
    </NuxtLink>
    <div class="flex gap-6">
      <HeaderLink
        v-for="button in header.buttons"
        :key="button.title.en"
        :title="button.title"
        :icon="button.icon"
        :link="button.link"
        :open-in-new-tab="button.openInNewTab"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const header = await store.getHeader()
</script>
