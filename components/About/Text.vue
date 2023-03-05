<template>
  <div class="flex flex-col gap-[1.125rem]">
    <div class="flex flex-col gap-1 text-center about-heading">
      <span class="text-4xl font-bold text-highlight">Василь Ріхтер</span>
      <span class="text-xl font-semibold text-light-secondary"
        >22 роки ꞏ інді-музикант
        <!-- <a
          href="https://t.me/nneeeooo"
          target="_blank"
          class="text-white underline bg-red-500 rounded-lg"
        >
          ꞏ тг:@nneeeooo
        </a> -->
      </span>
    </div>
  </div>
</template>

<style lang="postcss">
@screen md {
  .about-heading {
    @apply text-left;
  }
  .about-description {
    @apply text-xl;
  }
}

@screen lg {
  .about-description {
    @apply text-3xl;
  }
}
</style>
