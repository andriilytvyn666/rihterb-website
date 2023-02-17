<template>
  <footer
    class="custom-footer min-[320px]:max-md:gap-5 xl:w-[73.75rem] lg:w-[62rem] md:w-[46rem] sm:w-[38rem] min-[500px]:w-[29.25rem] min-[320px]:w-[20.5rem]"
  >
    <div
      class="flex flex-col min-[320px]:max-md:items-center min-[320px]:max-md:justify-between"
    >
      <span>Copyright © 2023 Василь Ріхтер</span>
      <a
        href="https://andriilytvyn.pp.ua"
        target="_blank"
        class="hover:underline"
        >Розробник: Андрій Литвин</a
      >
    </div>
    <div class="flex gap-6">
      <div class="flex gap-5 text-2xl items-center">
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
      </div>
      <div class="custom-separator" />
      <div class="flex gap-5 text-2xl items-center">
        <ButtonFooterIcon
          name="instagram"
          link="https://www.instagram.com/rihterb"
        />
        <ButtonFooterIcon name="telegram" link="https://t.me/rihterb" />
        <ButtonFooterIcon
          name="youtube"
          link="https://www.youtube.com/@rihterb"
        />
      </div>
      <div class="custom-separator" />
      <div class="flex gap-5 text-2xl items-center">
        <ButtonFooterIcon
          name="patreon"
          link="https://www.patreon.com/join/vasilyrichter"
        />
        <ButtonFooterIcon
          name="bandcamp"
          link="https://vasilyrichter.bandcamp.com/"
        />
      </div>
    </div>
  </footer>
</template>

<style class="postcss">
.custom-footer {
  @apply font-medium text-light-secondary;
  @apply flex justify-between items-center mx-auto py-6 mt-20;
  @apply min-[320px]:max-md:flex-col-reverse;
}
</style>
