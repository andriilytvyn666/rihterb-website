<template>
  <div id="page-wrapper">
    <div class="flex flex-col min-h-screen">
      <Header />
      <div class="flex flex-col gap-12 grow">
        <slot />
      </div>
      <Footer />
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
