<template>
  <header
    class="flex items-center justify-between h-20 xl:w-[73.75rem] lg:w-[62rem] md:w-[46rem] sm:w-[38rem] min-[500px]:w-[29.25rem] min-[320px]:w-[20.5rem]"
  >
    <div class="flex items-center gap-3">
      <NuxtImg
        src="/logo.webp"
        alt="Ріхтер"
        class="h-12 w-fit"
        width="82"
        height="48"
      />
    </div>
    <nav class="flex gap-3">
      <ButtonNav
        name="Youtube"
        icon="youtube"
        link="https://www.youtube.com/@rihterb"
      />
      <ButtonNav
        name="Instagram"
        icon="instagram"
        link="https://www.instagram.com/rihterb"
      />
    </nav>
  </header>
</template>
