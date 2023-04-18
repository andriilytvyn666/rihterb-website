<template>
  <div class="flex flex-col items-center w-full gap-2">
    <header id="header" v-if="header !== undefined">
      <div class="flex items-center gap-3">
        <!-- TODO: find a solition for broken routing -->
        <NuxtLink to="https://rihterb.pp.ua">
          <NuxtImg
            :src="header.logo.asset._ref"
            alt="Richter"
            id="header-logo"
            class="logo"
            width="128"
            height="128"
          />
        </NuxtLink>
      </div>
      <nav class="hidden truncate grow sm:block">
        <ButtonNav
          :linkType="link.linkType"
          :target="link.target"
          v-for="link in navLinks"
          :key="link._id"
          :name="getLocalizedString($i18n.locale, link.title)"
          :emoji="link.icon"
          image
          :link="link.link"
          rounded
        />
      </nav>
      <div class="flex gap-3">
        <ButtonNav
          name=""
          class="text-[#26A5E4] w-[3.375rem] h-[3.375rem]"
          linkType="web"
          target="New page"
          :link="header.linkTelegram"
          icon="telegram2"
          rounded
        />
        <ButtonNav
          name=""
          class="w-[3.375rem] h-[3.375rem] text-light instagram-bg"
          linkType="web"
          target="New page"
          :link="header.linkInstagram"
          icon="instagram"
          rounded
        />
      </div>
    </header>
    <nav class="grid w-full grid-cols-1 gap-5 px-4 sm:hidden">
      <ButtonNav
        :linkType="link.linkType"
        :target="link.target"
        v-for="link in navLinks"
        :key="link._id"
        :name="getLocalizedString($i18n.locale, link.title)"
        :emoji="link.icon"
        image
        :link="link.link"
        rounded
        class="truncate grow"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useSanityStore } from '../stores/sanity'

// const localePath = useLocalePath()
const store = useSanityStore()

const navLinks = await store.getNavLinks()
const header = await store.getHeader()
</script>

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

.logo {
  @apply w-[3.375rem] h-[3.375rem];
  @apply min-w-[3.375rem] min-h-[3.375rem];
  @apply transition-transform duration-300 ease-in-out;
}

.instagram-custom {
  @apply hover:border-light rounded-full !important;
}

.telegram-custom {
  @apply rounded-full !important;
}

#header {
  @apply flex items-center justify-between flex-grow;
  @apply w-full h-20 gap-6 px-4 mx-4 mt-6;
}

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
