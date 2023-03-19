<template>
  <footer id="footer" class="px-4" v-if="renderCondition">
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
  </footer>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "footerLinks"][0]
    {_id, spotify, youtubemusic, applemusic, instagram, 
     telegram, youtube, patreon, bandcamp}`

const { data } = await useSanityQuery<FooterLinks>(query)

const links = data.value!

const renderCondition: boolean = links !== undefined && links !== null
</script>

<style class="postcss">
.links-container {
  @apply flex flex-wrap items-center justify-center gap-6 text-2xl;
}

#footer {
  @apply font-medium text-light-secondary;
  @apply flex justify-between items-center  py-6 mt-12 sm:mt-20;
  @apply flex-col-reverse gap-5 w-screen;
}

@screen sm {
  #footer {
    @apply w-[38rem];
    @apply mx-auto;
  }
}

@screen md {
  #footer {
    @apply w-[46rem] flex-row gap-0;
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
