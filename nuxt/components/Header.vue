<template>
  <header class="flex items-center justify-between" id="header">
    <nav class="hidden gap-4" id="left">
      <NuxtLink :to="localePath('/album', $i18n.locale)">новий альбом</NuxtLink>
      <span class="separator">/</span>
      <NuxtLink :to="localePath('/magazine', $i18n.locale)">журнал 9</NuxtLink>
    </nav>
    <NuxtLink :to="localePath('/', $i18n.locale)">
      <NuxtImg
        rel="preload"
        src="/logo.webp"
        width="48"
        height="48"
        id="logo"
        class="rounded-full w-9 h-9"
      />
    </NuxtLink>
    <button
      id="right-mobile"
      @click="$i18n.setLocale('uk')"
      v-if="$i18n.locale === 'en'"
    >
      укр
    </button>
    <button id="right-mobile" @click="$i18n.setLocale('en')" v-else>eng</button>
    <nav class="hidden gap-4" id="right">
      <button @click="$i18n.setLocale('uk')" v-if="$i18n.locale === 'en'">
        укр
      </button>
      <button @click="$i18n.setLocale('en')" v-else>eng</button>
      <span class="separator">/</span>
      <NuxtLink to="/">слухати</NuxtLink>
      <span class="separator">/</span>
      <NuxtLink to="/">соцмережі</NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<style lang="postcss">
.separator {
  @apply text-dark-secondary;
}

#right-mobile {
  @apply text-body-md-500;
}

#header {
  @apply px-2 py-6;
  @apply text-body-md-600 mb-8 sm:mb-12;
}

@screen md {
  #logo {
    @apply w-12 h-12;
  }

  #header {
    @apply px-0 py-5;
  }

  #left,
  #right {
    @apply flex;
  }

  #right-mobile {
    @apply hidden;
  }
}
</style>
