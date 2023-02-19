<template>
  <div class="custom-listen-button">
    <span class="text-2xl font-semibold whitespace-nowrap">Слухайте на</span>
    <div class="flex items-center justify-center gap-5">
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
  </div>
</template>

<style lang="postcss">
.custom-listen-separator {
  @apply custom-separator;
  @apply bg-dark;
}

.custom-listen-button {
  @apply bg-highlight hover:bg-[#e4b454];
  @apply transition ease-in-out duration-300;
  @apply flex flex-col gap-5 px-6 py-3 w-min items-center;
  @apply rounded-lg;
  @apply w-fit justify-between;
}

@screen sm {
  .custom-listen-button {
    @apply flex-row w-full;
  }
}

@screen md {
  .custom-listen-button {
    @apply w-fit;
  }
}
</style>
