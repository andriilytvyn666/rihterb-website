<template>
  <div class="flex flex-col flex-grow min-h-screen items-center">
    <Header />
    <article
      class="grid justify-center grid-cols-12 gap-5 mx-auto w-[1180px] grow"
    >
      <div class="flex flex-col col-span-12 gap-20 pt-6">
        <slot />
      </div>
    </article>
    <Footer />
  </div>
</template>
