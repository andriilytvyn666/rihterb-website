<template>
  <div class="flex flex-col gap-[1.125rem]">
    <div class="flex flex-col gap-1 text-center about-heading">
      <span class="text-4xl font-bold text-highlight">Василь Ріхтер</span>
      <span class="text-xl font-semibold text-light-secondary"
        >12 років ꞏ музикант
      </span>
    </div>
    <div>
      <p class="text-2xl font-bold text-light about-description">
        Лорем ипсум долор сит амет, ут еним фалли сентентиае меи, нам цу
        аппареат волуптатибус. Новум анимал ад сеа.
      </p>
    </div>
  </div>
</template>

<style lang="postcss">
@screen sm {
  .about-heading {
    @apply text-left;
  }
  .about-description {
    @apply text-xl;
  }
}

@screen md {
  .about-description {
    @apply text-2xl;
  }
}

@screen lg {
  .about-description {
    @apply text-3xl;
  }
}
</style>
