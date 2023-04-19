<template>
  <div
    class="flex flex-col items-center justify-between gap-8 p-8 rounded-lg sm:gap-0 sm:flex-row bg-dark-alt"
  >
    <div class="flex flex-col items-center gap-8 sm:flex-row">
      <NuxtImg
        src="album.png"
        alt="album"
        width="320"
        height="320"
        class="w-full h-full rounded-lg sm:w-20 sm:h-20 shadow-default"
      />
      <div class="flex flex-col justify-center gap-2">
        <h2
          class="line-clamp-2 sm:line-clamp-1 w-fit text-hl-yellow text-h-lg-700"
        >
          новий альбом “дев’ять життів”
        </h2>
        <p class="line-clamp-2 sm:line-clamp-1 text-light text-body-md-600">
          слухайте хутчіш
        </p>
      </div>
    </div>
    <Button name="слухати" class="bg-light text-dark h-fit" />
  </div>
</template>
