<template>
  <footer id="footer" class="px-4">
    <div class="flex flex-col items-center justify-between copyright-text">
      <span>Copyright © 2023 Василь Ріхтер</span>
      <a
        href="https://andriilytvyn.pp.ua"
        target="_blank"
        class="hover:underline"
        >Розробник: Андрій Литвин</a
      >
    </div>
    <div class="flex flex-wrap items-center justify-center gap-6 text-2xl">
      <ButtonFooterIcon
        name="spotify"
        link="https://open.spotify.com/artist/1BVc2E4oUK6Md4Mte88JPL"
      />
      <ButtonFooterIcon
        name="youtubemusic"
        link="https://music.youtube.com/channel/UCZGPjMchF7bUpZeQ6ScTynA"
      />
      <ButtonFooterIcon
        name="applemusic"
        link="https://music.apple.com/us/artist/vasily-richter/1534786803"
      />
      <div class="hidden custom-separator sm:block" />
      <ButtonFooterIcon
        name="instagram"
        link="https://www.instagram.com/rihterb"
      />
      <ButtonFooterIcon name="telegram" link="https://t.me/rihterb" />
      <ButtonFooterIcon
        name="youtube"
        link="https://www.youtube.com/@rihterb"
      />
      <div class="hidden custom-separator sm:block" />
      <ButtonFooterIcon
        name="patreon"
        link="https://www.patreon.com/join/vasilyrichter"
      />
      <ButtonFooterIcon
        name="bandcamp"
        link="https://vasilyrichter.bandcamp.com/"
      />
    </div>
  </footer>
</template>

<style class="postcss">
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
