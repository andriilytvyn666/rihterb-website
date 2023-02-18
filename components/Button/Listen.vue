<template>
  <div class="custom-listen-button">
    <div>
      <span class="hidden xs:block sm:hidden">xs</span>
      <span class="hidden sm:block md:hidden">sm</span>
      <span class="hidden md:block lg:hidden">md</span>
      <span class="hidden lg:block xl:hidden">lg</span>
      <span class="hidden xl:block 2xl:hidden">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div>
    <span class="text-2xl font-semibold whitespace-nowrap">Слухайте на </span>
    <ButtonListenIcon
      icon="spotify"
      link="https://open.spotify.com/artist/1BVc2E4oUK6Md4Mte88JPL"
    />
    <div class="custom-listen-separator" />
    <ButtonListenIcon
      icon="youtubemusic"
      link="https://music.youtube.com/channel/UCZGPjMchF7bUpZeQ6ScTynA"
    />
    <div class="custom-listen-separator" />

    <ButtonListenIcon
      icon="applemusic"
      link="https://music.apple.com/us/artist/vasily-richter/1534786803"
    />
  </div>
</template>

<style lang="postcss">
.custom-listen-separator {
  @apply custom-separator;
  @apply bg-dark;
}

.custom-listen-button {
  @apply bg-highlight;
  @apply flex gap-5 px-6 py-3 w-min items-center;
  @apply rounded-lg;
}
</style>
