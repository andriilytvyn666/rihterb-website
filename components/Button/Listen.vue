<template>
  <div class="custom-listen-button">
    <span class="whitespace-nowrap text-2xl font-semibold">Слухайте на </span>
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
