<template>
  <div class="flex flex-col min-h-screen">
    <Header2 class="sticky top-0" />
    <div
      class="flex flex-col items-center justify-center py-24 overflow-scroll grow"
    >
      <slot />
    </div>
  </div>
</template>
