<template>
  <header class="flex items-center justify-between" id="header">
    <nav class="hidden gap-4" id="left">
      <NuxtLink to="/album">новий альбом</NuxtLink>
      <span>/</span>
      <NuxtLink to="/journal">журнал 9</NuxtLink>
    </nav>
    <NuxtLink to="/">
      <NuxtImg
        src="/logo.png"
        width="320"
        height="320"
        id="logo"
        class="w-9 h-9"
      />
    </NuxtLink>
    <span id="left-mobile">eng</span>
    <nav class="hidden gap-4" id="right">
      <button @click="$i18n.setLocale('uk')" v-if="$i18n.locale === 'en'">
        укр
      </button>
      <button @click="$i18n.setLocale('en')" v-else>eng</button>
      <span>/</span>
      <NuxtLink to="/album">слухати</NuxtLink>
      <span>/</span>
      <NuxtLink to="/journal">соцмережі</NuxtLink>
    </nav>
  </header>
</template>

<style lang="postcss">
#header {
  @apply px-2 py-6;
}

@screen sm {
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

  #left-mobile {
    @apply hidden;
  }
}
</style>
