<template>
  <div class="rounded-lg custom-banner">
    <div class="custom-mask">
      <div class="support-content">
        <div class="grid grid-rows-3 gap-6 md:grid-rows-2 lg:grid-cols-2">
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
        <div class="flex flex-col gap-4 font-bold w-[32rem] text-right">
          <span class="text-2xl support-title text-highlight"
            >Підтримайте мене</span
          >
          <span class="text-xl support-description text-light">
            Щоб я продовжував робити українську музику
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.support-content {
  @apply flex items-center justify-between;
  @apply h-64 pl-4 pr-12;
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
  .support-title {
    @apply text-3xl;
  }

  .support-description {
    @apply text-2xl;
  }
}
@screen md {
  .support-title {
    @apply text-4xl;
  }

  .support-description {
    @apply text-3xl;
  }
}

@screen lg {
  .support-content {
    @apply pl-16;
  }
}
</style>
