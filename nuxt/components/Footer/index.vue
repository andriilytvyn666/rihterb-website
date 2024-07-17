<template>
  <footer id="footer" v-if="links !== undefined">
    <div
      class="flex flex-col items-start justify-between w-full gap-1 px-2 line-clamp-1"
      id="copyright"
    >
      <span>{{ $t('copyright') }}</span>
      <a
        href="https://nneeeooo.pp.ua"
        target="_blank"
        class="hover:underline line-clamp-1"
      >
        Design & Development by Andrii Lytvyn</a
      >
    </div>
    <div id="links" class="flex w-full px-2 mx-auto sm:w-fit">
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
const sanityStore = useSanityStore()
const links = await sanityStore.getFooter()
</script>

<style class="postcss">
#copyright {
  @apply text-dark-secondary  text-footer-md-600;
}

#footer {
  @apply h-[8.75rem] sm:h-24 flex flex-col-reverse gap-5;
  @apply items-center justify-center sm:justify-between;
  /* @apply mt-8 sm:mt-0; */
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
