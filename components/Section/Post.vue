<template>
  <div class="grid grid-cols-1 gap-5 post-container">
    <!-- TODO: fix bandcamp player height -->
    <!-- <Bandcamp id="bandcamp-player" /> -->
    <Spotify id="spotify-player" />
    <div class="post-content md:col-span-7 lg:col-span-8">
      <div class="flex flex-col gap-1.5">
        <span class="text-4xl font-bold text-highlight-secondary"
          >Концерт у Львові // live in Lviv</span
        >
        <span class="text-xl font-semibold text-light-secondary"
          >Грудень 2022</span
        >
      </div>
      <div class="post-text">
        <div class="flex flex-col gap-6">
          <p class="select-text selection:bg-light-secondary">
            Лорем ипсум долор сит амет, ут еним фалли сентентиае меи. Яуи
            импедит проприае ут. Ид ессе пробо дуо, усу ид цоммодо цонституто.
          </p>
          <p class="select-text selection:bg-light-secondary">
            Яуодси трацтатос еам. Дигниссим интерпретарис пер еу. Не вел муциус
            дефинитионем. Ет поссим абхорреант пхилосопхиа меа, те дебитис
            плацерат сед.
          </p>
        </div>
        <Youtube id="JtQiHyjAfcE" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.post-text {
  @apply flex flex-col gap-8 font-bold text-light text-2xl;
}

.post-content {
  @apply flex flex-col gap-6;
}

@screen sm {
  .post-content {
    @apply col-span-4;
  }

  #bandcamp-player,
  #spotify-player {
    @apply col-span-6;
  }
}

@screen md {
  .post-container {
    @apply grid-cols-12;
  }
  .post-content {
    @apply col-span-7;
  }
  #bandcamp-player,
  #spotify-player {
    @apply col-span-5;
  }
}

@screen lg {
  .post-text {
    @apply text-3xl;
  }

  .post-content {
    @apply col-span-8;
  }

  #bandcamp-player,
  #spotify-player {
    @apply col-span-4;
  }
}
</style>
