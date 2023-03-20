<!-- TODO: find a way to improve UI/UX in navs -->
<template>
  <nav class="hidden gap-3 sm:flex" v-if="renderCondition">
    <ButtonNav
      :linkType="link.linkType"
      :target="link.target"
      v-for="link in navLinks"
      :key="link._id"
      class="border bg-dark-hover border-light-secondary hover:border-light hover:bg-[#383838]"
      :name="getLocalizedString($i18n.locale, link.title)"
      :emoji="link.icon"
      image
      :link="link.link"
    />
  </nav>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "nav"]
    {_id, title, linkType, target, link, icon}`

const { data } = await useSanityQuery<NavLink[]>(query)

const navLinks = data.value!

const renderCondition: boolean =
  navLinks !== undefined && navLinks !== null && navLinks.length > 0
</script>
