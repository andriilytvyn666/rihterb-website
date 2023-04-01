<template>
  <header
    id="header"
    class="flex items-center justify-between w-full h-20 px-4 mx-4 mt-6"
    v-if="header !== undefined"
  >
    <div class="flex items-center gap-3">
      <NuxtLink :to="localePath('/')">
        <NuxtImg
          :src="header.logo.asset._ref"
          alt="Ріхтер"
          id="header-logo"
          class="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-125"
          width="128"
          height="128"
        />
      </NuxtLink>
    </div>
    <div class="flex gap-3 sm:hidden">
      <ButtonNav
        name=""
        class="text-[#26A5E4] telegram-custom"
        linkType="web"
        target="New page"
        :link="header.linkTelegram"
        icon="telegram2"
      />
      <ButtonNav
        name=""
        class="text-light instagram-bg instagram-custom"
        linkType="web"
        target="New page"
        :link="header.linkInstagram"
        icon="instagram"
        \
      />
    </div>
    <NavDesktop />
  </header>
</template>

<style lang="postcss">
.instagram-custom {
  @apply hover:border-light rounded-full !important;
}

.telegram-custom {
  @apply rounded-full !important;
}
</style>

<script setup lang="ts">
import { useSanityStore } from '../stores/sanity'

const localePath = useLocalePath()
const store = useSanityStore()

const header = await store.getHeader()
</script>

<style lang="postcss">
@screen sm {
  #header {
    @apply w-[38rem];
  }
}

@screen md {
  #header {
    @apply w-[46rem];
  }
}

@screen lg {
  #header {
    @apply w-[62rem];
  }
}

@screen xl {
  #header {
    @apply w-[73.75rem];
  }
}
</style>
