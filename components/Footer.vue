<template>
  <footer
    class="w-[1180px] flex justify-between items-center mx-auto py-6 font-medium text-light-secondary"
  >
    <div class="flex flex-col gap">
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
