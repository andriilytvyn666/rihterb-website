<template>
  <nav class="grid grid-cols-1 gap-5 sm:hidden" v-if="rendererCondition">
    <ButtonNav
      :linkType="link.linkType"
      :target="link.target"
      v-for="link in navLinks"
      :key="link._id"
      :name="getLocalizedString($i18n.locale, link.title)"
      :emoji="link.icon"
      image
      :link="link.link"
    />
  </nav>
</template>

<script setup lang="ts">
import { useSanityStore } from '../stores/sanity'
const store = useSanityStore()
const navLinks = await store.getNavLinks()
const rendererCondition = navLinks !== undefined && navLinks.length !== 0
</script>
