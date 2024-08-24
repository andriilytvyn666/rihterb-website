<template>
  <div
    class="flex flex-col-reverse justify-between gap-4 px-4 py-5 md:gap-0 sm:items-center sm:flex-row md:px-6"
  >
    <div class="flex flex-col w-full gap-2 md:gap-0 font-inter text-bg1">
      <div class="flex gap-2">
        <button
          :class="`${$i18n.locale === 'en' ? 'text-fg2' : 'hover:text-fg2'} text-footer font-inter`"
          @click="setLocale('en')"
        >
          English
        </button>
        <button
          :class="` ${['ru', 'bel', 'uk'].includes($i18n.locale) ? 'text-fg2' : 'hover:text-fg2'} text-footer font-inter`"
          @click="setLocale('uk')"
        >
          Українська
        </button>
      </div>
      <div class="flex flex-col gap-0 md:flex-row md:gap-2">
        <span class="font-inter text-footer line-clamp-1"
          >Copyright © 2023 Василій Ріхтер</span
        >
        <span class="hidden md:inline">/</span>
        <NuxtLink
          to="https://nneeeooo.pp.ua"
          target="_blank"
          class="font-inter hover:text-fg2 hover:underline text-footer line-clamp-1"
        >
          Design & Development by Andrii Lytvyn
        </NuxtLink>
      </div>
    </div>
    <div class="flex gap-3.5">
      <NuxtLink
        v-for="link in footer.links"
        :key="link.link"
        :to="link.link"
        :target="link.openInNewTab ? '_blank' : '_self'"
      >
        <Icon
          :name="link.icon"
          class="transition-all duration-300 hover:-translate-y-1 text-fg2 hover:opacity-80"
          size="20"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()
const store = useSanityStore()

const footer = await store.getFooter()
</script>
