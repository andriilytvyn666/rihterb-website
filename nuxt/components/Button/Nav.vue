<template>
  <NuxtLink
    :to="
      props.linkType === 'web'
        ? props.link
        : `https://rihterb.pp.ua/${$i18n.locale === 'en' ? 'en/' : ''}${
            props.link
          }`
    "
    :target="props.target === 'New page' ? '_blank' : '_self'"
    :class="`nav-button ${props.name === '' ? 'px-3 sm:px-4' : 'px-8'}`"
  >
    <nuxt-icon
      :name="`social/${icon}`"
      filled
      class="text-xl pointer-events-none"
      v-if="!image"
    />
    <img
      class="w-5 pointer-events-none"
      :src="`/${props.emoji}Emoji.webp`"
      alt="fireEmoji"
      v-else
    />
    <span v-if="props.name !== ''" class="pointer-events-none text-light">
      {{ props.name }}
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  icon?: string
  linkType: string
  target: string
  link: string
  image?: boolean
  emoji?: string
}>()
</script>

<style lang="postcss">
.nav-button {
  @apply bg-dark-hover text-lg;
  @apply flex gap-3 items-center justify-center py-3 rounded-lg;
  @apply transition ease-in-out duration-300;
  @apply border border-dark-hover;
  @apply hover:border-light-secondary hover:bg-[#282828];
}
</style>
