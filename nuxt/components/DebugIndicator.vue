<template>
  <div class="fixed flex flex-col gap-4 bottom-4 right-4 text-dark">
    <div
      class="flex items-center justify-center w-10 h-10 p-4 rounded-lg bg-light"
    >
      <span class="hidden xs:block sm:hidden">xs</span>
      <span class="hidden sm:block md:hidden">sm</span>
      <span class="hidden md:block lg:hidden">md</span>
      <span class="hidden lg:block xl:hidden">lg</span>
      <span class="hidden xl:block 2xl:hidden">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div>
    <div
      class="flex items-center justify-center w-10 h-10 p-4 rounded-lg bg-light"
    >
      <span class="">{{ $i18n.locale }}</span>
    </div>
  </div>
</template>
