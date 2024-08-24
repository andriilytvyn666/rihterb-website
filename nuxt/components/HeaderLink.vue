<template>
  <NuxtLink
    :to="localePath(link)"
    :alt="title"
    :target="openInNewTab ? '_blank' : '_self'"
    class="flex items-center gap-2 hover:-translate-y-1 hover:opacity-80"
  >
    <Icon :name="icon" />
    <span class="font-inter text-header whitespace-nowrap leading-1">{{
      getLocalizedString($i18n.locale, title)
    }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  title: localeString
  link: string
  icon: string
  openInNewTab: boolean
}>()

const localePath = useLocalePath()
</script>
