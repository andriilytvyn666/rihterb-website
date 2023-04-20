<template>
  <div class="flex flex-col h-full grow">
    <div class="flex flex-col gap-8 justify-center grow">
      <div class="flex justify-center">
        <NuxtImg src="alt.png" class="z-0 left-card order-1" />
        <NuxtImg
          src="album.png"
          class="z-10 right-card order-3 sm:order-3 sm:middle-card"
        />
        <NuxtImg
          src="about.png"
          class="z-0 order-2 middle-card sm:order-2 sm:right-card"
        />
      </div>
      <div class="flex flex-col gap-8 items-center w-full" id="control">
        <div class="flex items-center flex-col gap-5 text-center">
          <h2 class="text-hl-yellow text-h-lg-700">підтримка</h2>
          <p class="text-body-lg-600">
            дайте грошей, щоб писати псіходелік рок
          </p>
        </div>
        <div
          class="flex-col sm:flex-row flex gap-4 w-full justify-center flex-wrap"
        >
          <Button name="патреон" class="border border-dark-border">
            <NuxtIcon name="social/patreon" class="text-[1.5rem]" filled />
          </Button>
          <Button name="бендкемп" class="border border-dark-border">
            <NuxtIcon name="social/bandcamp" class="text-[1.5rem]" filled />
          </Button>
          <Button name="пейпел" class="border border-dark-border">
            <NuxtIcon name="social/paypal" class="text-[1.5rem]" filled />
          </Button>
          <Button name="дяка" class="border border-dark-border">
            <NuxtIcon name="feather/heart" class="text-[1.5rem]" filled />
          </Button>
          <Button name="моно" class="border border-dark-border">
            <NuxtIcon name="feather/dollar-sign" class="text-[1.5rem]" filled />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply h-[16rem] lg:h-[18.75rem] aspect-square;
  @apply shadow-default rounded-lg;
}

.middle-card {
  @apply card;

  @apply rotate-0;
}

.left-card {
  @apply card;

  @apply relative;
  @apply top-1 left-56 -rotate-6;
  @apply sm:top-3 sm:left-32 sm:-rotate-6;
  @apply md:top-4 xl:top-5;
}

.right-card {
  @apply card;

  @apply relative;
  @apply top-1 -left-56 rotate-6;
  @apply sm:top-3 sm:-left-32 sm:rotate-6;
  @apply md:top-4 xl:top-5;
}
</style>
