<template>
  <div class="flex flex-col min-h-screen">
    <DevOnly>
      <DebugIndicator />
    </DevOnly>
    <Header class="sticky top-0" />
    <div class="flex flex-col overflow-scroll grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>
