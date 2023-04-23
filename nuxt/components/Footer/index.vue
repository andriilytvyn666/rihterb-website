<template>
  <footer id="footer" v-if="links !== undefined">
    <div class="flex flex-col items-center justify-between" id="copyright">
      <span>{{ $t('copyright') }}</span>
      <a
        href="https://andriilytvyn.pp.ua"
        target="_blank"
        class="hover:underline"
        >{{ $t('dev') }}</a
      >
    </div>
    <div id="links">
      <FooterIcon name="spotify" :link="links.spotify" />
      <FooterIcon name="youtubemusic" :link="links.youtubemusic" />
      <FooterIcon name="applemusic" :link="links.applemusic" />
      <FooterIcon name="instagram" :link="links.instagram" />
      <FooterIcon name="telegram" :link="links.telegram" />
      <FooterIcon name="youtube" :link="links.youtube" />
      <FooterIcon name="patreon" :link="links.patreon" />
      <FooterIcon name="bandcamp" :link="links.bandcamp" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useSanityStore } from '../../stores/sanity'

const store = useSanityStore()

const links = await store.getFooter()
</script>

<style class="postcss">
#copyright {
  @apply text-dark-secondary  text-footer-md-600;
}

#footer {
  @apply h-[8.75rem] sm:h-24 flex flex-col-reverse gap-5;
  @apply items-center justify-center sm:justify-between;
  @apply mt-8 sm:mt-12;
}

@screen sm {
  #footer {
    @apply flex-row gap-0;
  }
}

@screen sm {
  #copyright {
    @apply items-start justify-start;
  }
}

#links {
  @apply flex gap-5 h-8 items-center;
}

#links * {
  @apply w-6 h-6;
}
</style>
