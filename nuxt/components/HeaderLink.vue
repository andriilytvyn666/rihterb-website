<template>
  <NuxtLink
    :to="link"
    :alt="title"
    :target="openInNewTab ? '_blank' : '_self'"
    class="flex items-center gap-2 hover:-translate-y-1 hover:opacity-80"
  >
    <Icon :name="icon" />
    <span class="font-inter text-header whitespace-nowrap leading-1">{{
      title
    }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  link: string
  icon: string
  openInNewTab: boolean
}>()
</script>
