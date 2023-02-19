<template>
  <div class="rounded-lg bg-dark-hover support-content">
    <div class="flex flex-col gap-4 font-bold text-left">
      <span class="text-2xl text-center support-title text-highlight"
        >Підтримайте мене</span
      >
      <span class="text-xl support-description text-light">
        Щоб я продовжував робити українську музику
      </span>
    </div>
    <div class="support-buttons">
      <ButtonSupport
        link="https://www.patreon.com/vasilyrichter"
        type="patreon"
      />
      <ButtonSupport
        link="https://vasilyrichter.bandcamp.com/"
        type="bandcamp"
      />
      <ButtonSupport link="https://rihterb.diaka.ua/donate" type="diaka" />
    </div>
  </div>
</template>

<style lang="postcss">
.support-buttons {
  @apply gap-4 grid grid-rows-3;
}

.support-content {
  @apply flex flex-col justify-between;
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
    @apply grid-cols-2 grid-rows-2 content-end;
  }
}

@screen xl {
}
</style>
