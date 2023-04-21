<template>
  <div class="flex flex-col items-center gap-8 sm:items-stretch sm:flex-row">
    <NuxtImg
      src="/about.webp"
      alt="About"
      width="320"
      height="320"
      class="rounded-lg w-[20.875rem] h-[20.875rem] sm:w-[17.875rem] sm:h-[17.875rem] shadow-default"
    />
    <div class="flex flex-col justify-between gap-8 sm:gap-0">
      <div class="flex flex-col text-center sm:text-left">
        <h1 class="text-h-lg-700 text-hl-yellow">Василій Ріхтер</h1>
        <h3 class="text-body-md-600 text-dark-secondary">
          10 років ꞏ музикант
        </h3>
      </div>
      <p class="text-center text-body-lg-600 text-light sm:text-left">
        <span class="hidden sm:inline">
          <span class="line-clamp-4">
            український інді-музикант. пишу психоделічні інді пісні з унікальним
            саундом. поєднуючи різні жанри, досліджую емоційні простори,
            створюючи неповторний настрій.
          </span>
        </span>
        <span class="sm:hidden">
          український інді-музикант. пишу психоделічні інді пісні з унікальним
          саундом.
        </span>
      </p>
      <div class="flex flex-col gap-4 sm:flex-row">
        <Button class="bg-hl-yellow text-dark" name="слухати" />
        <Button class="bg-light text-dark" name="соцмережі" />
      </div>
    </div>
  </div>
</template>
