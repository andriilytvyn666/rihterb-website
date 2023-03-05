<template>
  <a :href="link" target="_blank" class="nav-button">
    <nuxt-icon :name="`social/${icon}`" filled class="text-xl" v-if="!image" />
    <img
      class="w-5"
      :src="`/${props.emoji}Emoji.webp`"
      alt="fireEmoji"
      v-else
    />
    <span>{{ props.name }}</span>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  icon?: string
  link: string
  image: boolean
  emoji?: string
}>()
</script>

<style lang="postcss">
.nav-button {
  @apply text-light hover:bg-dark-hover text-lg;
  @apply flex gap-3 items-center justify-center py-3 px-4 rounded-lg;
  @apply transition ease-in-out duration-300;
}
</style>
