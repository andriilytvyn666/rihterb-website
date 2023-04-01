<template>
  <footer id="footer" class="px-4" v-if="links !== undefined">
    <!-- TODO: put locale switcher in separate component -->
    <div class="flex gap-4 rounded-lg text-light">
      <button class="locale-button" @click="changeLocale('uk')">Укр</button>
      <button class="locale-button" @click="changeLocale('en')">Eng</button>
    </div>
    <div class="flex flex-col-reverse justify-between w-full gap-5 md:flex-row">
      <div class="flex flex-col items-center justify-between copyright-text">
        <span>{{ $t('copyright') }}</span>
        <a
          href="https://andriilytvyn.pp.ua"
          target="_blank"
          class="hover:underline"
          >{{ $t('dev') }}</a
        >
      </div>
      <div class="links-container">
        <ButtonFooterIcon name="spotify" :link="links.spotify" />
        <ButtonFooterIcon name="youtubemusic" :link="links.youtubemusic" />
        <ButtonFooterIcon name="applemusic" :link="links.applemusic" />
        <div class="hidden custom-separator sm:block" />
        <ButtonFooterIcon name="instagram" :link="links.instagram" />
        <ButtonFooterIcon name="telegram" :link="links.telegram" />
        <ButtonFooterIcon name="youtube" :link="links.youtube" />
        <div class="hidden custom-separator sm:block" />
        <ButtonFooterIcon name="patreon" :link="links.patreon" />
        <ButtonFooterIcon
          name="bandcamp"
          class="hidden min-[392px]:block"
          :link="links.bandcamp"
        />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useSanityStore } from '../stores/sanity'

const store = useSanityStore()
const { setLocale, setLocaleCookie } = useI18n()

const changeLocale = (locale: string) => {
  setLocale(locale)
  setLocaleCookie(locale)
  window.scrollTo(0, 0)
}

const links = await store.getFooterLinks()
</script>

<!-- TODO: refactor css -->
<style class="postcss">
.links-container {
  @apply flex flex-wrap items-center justify-center gap-6 text-2xl;
}

#footer {
  @apply font-medium text-light-secondary;
  @apply flex  flex-col-reverse items-center py-6 mt-12 sm:mt-20;
  @apply gap-5 w-screen;
}

.locale-button {
  /* TODO: make animations and transitions consistent */
  @apply duration-300 ease-in-out  transition-all;
  @apply flex gap-4 px-4 py-2 rounded-lg;
  @apply bg-dark-hover hover:bg-[#282828];
  @apply border border-dark-hover hover:border-light-secondary;
}

@screen sm {
  #footer {
    @apply w-[38rem];
  }
}

@screen md {
  #footer {
    @apply w-[46rem] flex-col items-start;
  }
  .copyright-text {
    @apply items-start justify-start;
  }
}

@screen lg {
  #footer {
    @apply w-[62rem];
  }
}

@screen xl {
  #footer {
    @apply w-[73.75rem];
  }
}
</style>
