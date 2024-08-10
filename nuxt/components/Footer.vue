<template>
  <div class="flex flex-col w-full px-6 py-5 font-inter text-bg1">
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
    <div class="flex gap-2">
      <span class="text-footer">Copyright © 2023 Василій Ріхтер</span>
      <span>/</span>
      <NuxtLink
        to="https://nneeeooo.pp.ua"
        target="_blank"
        class="hover:text-fg2 hover:underline text-footer"
      >
        Design & Development by Andrii Lytvyn
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()
</script>
