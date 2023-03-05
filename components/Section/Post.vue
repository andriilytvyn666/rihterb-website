<template>
  <div class="grid grid-cols-1 gap-6 post-container">
    <!-- <Bandcamp albumId="148721193" id="bandcamp-player" /> -->
    <Spotify
      albumId="0qiorHnzWjHAdWMqbSKe0s"
      class="order-last md:order-first"
      id="spotify-player"
    />
    <div class="post-content md:col-span-7 lg:col-span-8">
      <div class="flex flex-col gap-1.5">
        <span class="text-4xl font-bold text-highlight-secondary"
          >Концерт у Львові // live in Lviv</span
        >
        <span class="text-xl font-semibold text-light-secondary"
          >Грудень 2022 ꞏ feat. василь гріндер</span
        >
      </div>
      <div class="post-text">
        <div class="flex flex-col gap-6">
          <p
            class="whitespace-pre-line select-text selection:bg-light-secondary"
          >
            {{ postText }}
          </p>
        </div>
        <!-- <Youtube id="JtQiHyjAfcE" /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const postText: string =
  'Неповторний шанс насолодитися унікальною музикою від українського інді-музиканта.\n' +
  'Він зачаровує гітарним звучанням та харизматичним вокалом, переносячи слухачів у світ емоцій та здивувань.\n\n' +
  'Запис зберігає енергетику живого виступу, передаючи атмосферу концерту всім, хто не міг бути присутнім.\n'
</script>

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
