<template>
  <header class="flex items-center justify-between" id="header">
    <nav class="hidden gap-4" id="left">
      <NuxtLink to="/album">новий альбом</NuxtLink>
      <span class="separator">/</span>
      <NuxtLink to="/journal">журнал 9</NuxtLink>
    </nav>
    <NuxtLink to="/">
      <NuxtImg
        src="/logo.png"
        width="320"
        height="320"
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
      <NuxtLink to="/album">слухати</NuxtLink>
      <span class="separator">/</span>
      <NuxtLink to="/journal">соцмережі</NuxtLink>
    </nav>
  </header>
</template>

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
