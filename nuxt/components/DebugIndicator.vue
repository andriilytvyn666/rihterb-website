<template>
  <div
    class="fixed bottom-0 right-0 z-50 flex flex-col font-inter text-footer text-bg1"
  >
    <div class="flex items-center justify-center w-10 h-10 p-4 bg-fg1">
      <span class="hidden xs:block sm:hidden">xs</span>
      <span class="hidden sm:block md:hidden">sm</span>
      <span class="hidden md:block lg:hidden">md</span>
      <span class="hidden lg:block xl:hidden">lg</span>
      <span class="hidden xl:block 2xl:hidden">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div>
    <div
      class="flex items-center justify-center w-10 h-10 p-4 border-t border-bg1 bg-fg1"
    >
      <span class="">{{ $i18n.locale }}</span>
    </div>
  </div>
</template>
