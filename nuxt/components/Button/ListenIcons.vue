<template>
  <div id="buttons-container" class="grid grid-cols-1 gap-3">
    <ButtonListenIcon
      name="Spotify"
      class="text-[#1DB954]"
      icon="spotify"
      link="https://open.spotify.com/artist/1BVc2E4oUK6Md4Mte88JPL"
    />
    <ButtonListenIcon
      name="Youtube Music"
      class="text-[#FF0000]"
      icon="youtubemusic"
      link="https://music.youtube.com/channel/UCZGPjMchF7bUpZeQ6ScTynA"
    />
    <ButtonListenIcon
      name="Apple Music"
      class="text-[#FA243C]"
      icon="applemusic"
      link="https://music.apple.com/us/artist/vasily-richter/1534786803"
    />
    <ButtonListenIcon
      name="Bandcamp"
      class="text-[#408294]"
      icon="bandcamp"
      link="https://vasilyrichter.bandcamp.com/"
    />
  </div>
</template>

<style lang="postcss">
@screen sm {
  #buttons-container {
    @apply grid-cols-2;
  }
}

@screen md {
  #buttons-container {
    @apply grid-cols-3;
  }
}

@screen lg {
  #buttons-container {
    @apply grid-cols-4;
  }
}
</style>
