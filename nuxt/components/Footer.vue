<template>
  <div
    class="flex flex-col w-full gap-2 px-4 py-5 md:px-6 md:gap-0 font-inter text-bg1"
  >
    <div class="flex gap-2">
      <button
        :class="`${$i18n.locale === 'en' ? 'text-fg2' : 'hover:text-fg2'} text-footer`"
        @click="setLocale('en')"
      >
        English
      </button>
      <button
        :class="` ${$i18n.locale === 'uk' ? 'text-fg2' : 'hover:text-fg2'} text-footer`"
        @click="setLocale('uk')"
      >
        Українська
      </button>
    </div>
    <!-- desktop -->
    <div class="flex flex-col gap-0 md:flex-row md:gap-2">
      <span class="text-footer line-clamp-1"
        >Copyright © 2023 Василій Ріхтер</span
      >
      <span class="hidden md:inline">/</span>
      <NuxtLink
        to="https://nneeeooo.pp.ua"
        target="_blank"
        class="hover:text-fg2 hover:underline text-footer line-clamp-1"
      >
        Design & Development by Andrii Lytvyn
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()
</script>
