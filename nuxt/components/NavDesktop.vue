<!-- TODO: find a way to improve UI -->
<template>
  <nav class="hidden gap-3 sm:flex" v-if="rendererCondition">
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
    <div class="hidden gap-3 md:flex">
      <ButtonNav
        name=""
        class="text-[#26A5E4]"
        linkType="web"
        target="New page"
        :link="header.linkTelegram"
        icon="telegram2"
      />
      <ButtonNav
        name=""
        class="text-light instagram-bg"
        linkType="web"
        target="New page"
        :link="header.linkInstagram"
        icon="instagram"
      />
    </div>
  </nav>
</template>

<style lang="postcss">
.instagram-bg {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  ) !important;

  @apply opacity-90;
}

.instagram-bg:hover {
  @apply transform transition-opacity duration-300 ease-in-out;
  @apply border-light opacity-100;
}
</style>

<script setup lang="ts">
import { useSanityStore } from '../stores/sanity'
const store = useSanityStore()
const navLinks = await store.getNavLinks()

const header = await store.getHeader()
const rendererCondition =
  navLinks !== undefined && navLinks.length !== 0 && header !== undefined
</script>
