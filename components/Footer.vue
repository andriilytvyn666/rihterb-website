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
        <ButtonFooter name="spotify" link="https://open.spotify.com" />
        <ButtonFooter name="youtubemusic" link="https://open.spotify.com" />
        <ButtonFooter name="applemusic" link="https://open.spotify.com" />
        <ButtonFooter name="soundcloud" link="https://open.spotify.com" />
      </div>
      <div class="separator" />
      <div class="flex gap-5 text-2xl items-center">
        <ButtonFooter name="instagram" link="https://open.spotify.com" />
        <ButtonFooter name="tiktok" link="https://open.spotify.com" />
        <ButtonFooter name="telegram" link="https://open.spotify.com" />
      </div>
      <div class="separator" />
      <div class="flex gap-5 text-2xl items-center">
        <ButtonFooter name="patreon" link="https://open.spotify.com" />
        <ButtonFooter name="bandcamp" link="https://open.spotify.com" />
      </div>
    </div>
  </footer>
</template>

<style lang="postcss">
.separator {
  @apply w-[0.5px] h-8 bg-light-secondary;
}
</style>
