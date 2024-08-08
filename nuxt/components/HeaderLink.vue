<template>
  <NuxtLink
    :to="link"
    :alt="title"
    :target="target"
    class="flex items-center gap-2"
  >
    <Icon :name="icon" />
    <span>{{ title }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  link: string
  icon: string
  target: '_blank' | '_self' | '_parent' | '_top'
}>()
</script>
