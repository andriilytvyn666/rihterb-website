<template>
  <nav class="grid grid-cols-1 gap-5 sm:hidden" v-if="renderCondition">
    <ButtonNav
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
    {_id, title, link, icon}`

const { data } = await useSanityQuery<NavLink[]>(query)

const navLinks = data.value!

const renderCondition: boolean =
  navLinks !== undefined && navLinks !== null && navLinks.length > 0
</script>
