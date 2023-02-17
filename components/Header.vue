<template>
  <header class="flex items-center justify-between h-20 w-[1180px]">
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
