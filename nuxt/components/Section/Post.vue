<template>
  <div class="grid grid-cols-1 gap-8 post-container" v-if="renderCondition">
    <Bandcamp
      :albumId="post.albumId"
      id="bandcamp-player"
      v-if="post.player === 'bandcamp'"
    />
    <Spotify
      :albumId="post.albumId"
      class="order-last md:order-first"
      id="spotify-player"
      v-if="post.player === 'spotify'"
    />
    <div class="post-content md:col-span-7 lg:col-span-8">
      <div class="flex flex-col gap-1.5 post-head">
        <span class="text-3xl font-bold text-highlight-secondary">
          {{ getLocalizedString($i18n.locale, post.title) }}
        </span>
        <span class="text-xl font-semibold text-light-secondary">
          {{ getLocalizedString($i18n.locale, post.subtitle) }}
        </span>
      </div>
      <div class="post-text">
        <div class="flex flex-col gap-6">
          <p
            v-for="par in getLocalizedString($i18n.locale, post.text).split(
              '\\n'
            )"
            :key="par"
            class="whitespace-pre-line select-text selection:bg-light-secondary"
            v-motion-slide-visible-once-bottom
          >
            {{ par }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "post"][0]
    {_id, title, subtitle, text, player, albumId}`

const { data } = await useSanityQuery<Post>(query)

const post = data.value!

const renderCondition: boolean = post !== undefined && post !== null
</script>

<style lang="postcss">
.post-text {
  @apply flex flex-col gap-8 font-semibold text-light text-2xl;
  @apply leading-snug;
}

.post-content {
  @apply flex flex-col gap-6;
}

.post-head {
  @apply text-center;
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
  .post-head {
    @apply text-left;
  }

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
    @apply text-2xl;
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
