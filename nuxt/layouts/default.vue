<template>
  <div class="px-4 xl:px-0">
    <DevOnly>
      <DebugIndicator />
    </DevOnly>
    <div id="page-wrapper">
      <div class="flex flex-col min-h-screen">
        <Header class="w-full" />
        <div class="flex flex-col gap-8 sm:gap-12 grow">
          <slot />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
#page-wrapper {
  @apply w-full;
}

@screen xl {
  #page-wrapper {
    @apply w-[78.75rem];
    @apply mx-auto;
  }
}
</style>
