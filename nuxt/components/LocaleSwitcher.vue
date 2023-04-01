<template>
  <div class="flex gap-4 rounded-lg text-light">
    <button class="locale-button" @click="changeLocale('uk')">
      Українська
    </button>
    <button class="locale-button" @click="changeLocale('en')">English</button>
  </div>
</template>

<script setup lang="ts">
const { setLocale, setLocaleCookie } = useI18n()

const changeLocale = (locale: string) => {
  setLocale(locale)
  setLocaleCookie(locale)
}
</script>
