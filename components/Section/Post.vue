<template>
  <div class="grid grid-cols-1 gap-5 post-container">
    <!-- TODO: fix bandcamp player height -->
    <Bandcamp id="bandcamp-player" />
    <div class="post-content md:col-span-7 lg:col-span-8">
      <div class="flex flex-col gap-1.5">
        <span class="text-4xl font-bold text-highlight-secondary"
          >Концерт у Львові // live in Lviv</span
        >
        <span class="text-xl font-semibold text-light-secondary"
          >Грудень 2022</span
        >
      </div>
      <div class="text-3xl font-bold text-light">
        <div class="flex flex-col">
          <p class="w-fit">
            Лорем ипсум долор сит амет, ут еним фалли сентентиае меи. Яуи
            импедит проприае ут. Ид ессе пробо дуо, усу ид цоммодо цонституто.
          </p>
          <br />
          <p>
            Яуодси трацтатос еам. Дигниссим интерпретарис пер еу. Не вел муциус
            дефинитионем. Ет поссим абхорреант пхилосопхиа меа, те дебитис
            плацерат сед.
          </p>
          <br />
        </div>
        <Youtube />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.post-content {
  @apply flex flex-col gap-[1.125rem];
}

@screen sm {
  .post-content {
    @apply col-span-4;
  }

  #bandcamp-player {
    @apply col-span-6;
  }
}

@screen md {
  .post-container {
    @apply grid-cols-12;
  }
  .post-content {
    @apply col-span-7;
  }
  #bandcamp-player {
    @apply col-span-5;
  }
}

@screen lg {
  .post-content {
    @apply col-span-8;
  }
  #bandcamp-player {
    @apply col-span-4;
  }
}
</style>
