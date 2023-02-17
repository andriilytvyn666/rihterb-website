<template>
  <div class="flex flex-col flex-grow min-h-screen items-center">
    <Header v-motion-fade-visible-once />
    <article
      class="grid justify-center grid-cols-12 gap-5 mx-auto xl:w-[73.75rem] lg:w-[62rem] md:w-[46rem] sm:w-[38rem] min-[500px]:w-[29.25rem] min-[320px]:w-[20.5rem] grow"
    >
      <div class="flex flex-col col-span-12 gap-20 pt-6">
        <slot />
      </div>
    </article>
    <Footer v-motion-fade-visible />
  </div>
</template>
