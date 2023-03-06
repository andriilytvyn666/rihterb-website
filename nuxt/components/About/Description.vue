<template>
  <div class="flex flex-col gap-[1.125rem]">
    <div>
      <p
        class="text-2xl font-bold select-text text-light about-description selection:bg-light-secondary"
      >
        Привіт! Я - український інді-музикант. Пишу психоделічні інді пісні з
        унікальним звучанням. У моїй музиці я поєдную різні жанри та досліджую
        емоційні простори, створюючи неповторний настрій.
      </p>
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
