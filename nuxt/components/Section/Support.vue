<template>
  <div class="rounded-lg bg-dark-hover support-content" v-if="renderCondition">
    <div class="flex flex-col w-full gap-4 font-bold text-left">
      <span class="text-2xl text-center support-title text-highlight">
        {{ getLocalizedString($i18n.locale, support.title) }}
      </span>
      <span class="text-xl support-description text-light">
        {{ getLocalizedString($i18n.locale, support.text) }}
      </span>
    </div>
    <div class="support-buttons">
      <ButtonSupport :link="support.patreonLink" type="patreon" />
      <ButtonSupport :link="support.bandcampLink" type="bandcamp" />
      <ButtonSupport :link="support.diakaLink" type="diaka" />
    </div>
  </div>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "support"][0]
    {_id, title, text, patreonLink, bandcampLink, diakaLink}`

const { data } = await useSanityQuery<Support>(query)

const support = data.value!

const renderCondition: boolean = support !== undefined && support !== null
</script>

<style lang="postcss">
.support-buttons {
  @apply gap-4 grid grid-rows-3;
}

.support-content {
  @apply flex flex-col;
  @apply gap-8 w-[18rem] px-8 py-8;
  @apply w-full;
}

.custom-banner {
  background-image: url('/banner.webp');
  @apply bg-left;
}
.custom-mask {
  background-image: linear-gradient(
    90deg,
    rgba(8, 8, 8, 0.7) 0%,
    rgba(8, 8, 8, 0.9) 58.94%
  );
}

@screen sm {
  .support-content {
    @apply px-12 py-12;
  }
  .support-description {
    @apply text-2xl;
  }
  .support-title {
    @apply text-3xl;
  }
}

@screen md {
  .support-buttons {
    @apply grid-rows-1 grid-cols-3;
  }
}

@screen lg {
  .support-description {
    @apply text-3xl;
  }

  .support-title {
    @apply text-left;
  }

  .support-content {
    @apply flex-row items-center;
  }
  .support-buttons {
    @apply min-w-[23rem];
    @apply grid-cols-2 grid-rows-2;
  }
}

@screen xl {
}
</style>
