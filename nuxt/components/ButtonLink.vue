<template>
  <NuxtLink
    :to="link"
    :target="openInNewTab ? '_blank' : '_self'"
    :class="`${primary ? 'bg-fg1 text-bg1' : 'text-fg1 bg-bg2'} hover:opacity-80 hover:-translate-y-1 flex w-fit py-2.5 px-4 gap-3 rounded-lg justify-center items-center`"
  >
    <Icon :name="icon" />
    <span class="text-button font-inter whitespace-nowrap line-clamp-1">{{
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
  primary?: boolean
}>()
</script>
