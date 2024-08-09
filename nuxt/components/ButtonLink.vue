<template>
  <NuxtLink
    :to="link"
    :target="target"
    :class="`${primary ? 'bg-fg1 text-bg1' : 'text-fg1 bg-bg2'} flex w-fit py-2.5 px-4 gap-3 rounded-lg justify-center items-center`"
  >
    <Icon :name="icon" />
    <span class="text-button font-inter whitespace-nowrap leading-1">{{
      title
    }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  link: string
  icon: string
  target: '_blank' | '_self' | '_parent' | '_top'
  primary?: boolean
}>()
</script>
