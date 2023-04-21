<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col md:flex-row gap-8 justify-center">
      <h2 class="text-hl-yellow text-h-lg-700 text-center md:hidden">
        дев'ять життів
      </h2>

      <div class="flex flex-col gap-8 items-center md:w-[23.5rem]">
        <NuxtImg
          src="/album/index.webp"
          class="rounded-lg shadow-default aspect-square w-[20.875rem] md:w-full"
        />
        <div class="flex w-full gap-4 text-dark">
          <NuxtLink :to="localePath('/journal', $i18n.locale)" class="w-full">
            <Button class="bg-light sm:w-full" name="журнал" />
          </NuxtLink>
          <NuxtLink :to="localePath('/', $i18n.locale)" class="w-full">
            <Button class="bg-hl-yellow sm:w-full" name="слухати" />
          </NuxtLink>
        </div>
        <div class="flex flex-col text-center md:text-left">
          <div class="flex flex-col gap-5">
            <h2
              class="text-hl-yellow text-h-lg-700 hidden md:text-center md:inline"
            >
              дев'ять життів
            </h2>
            <p class="text-body-lg-600">
              відчуйте життя звичайних українців після початку повномасштабного
              вторгнення
            </p>
          </div>
          <br />
          <p class="text-body-lg-600">
            прослуховуючи переглядайте журнал, створений разом з талановитими
            митцями та мисткинями
          </p>
        </div>
      </div>
      <iframe
        class="w-full md:w-[28.75rem] min-h-[30rem]"
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/0qiorHnzWjHAdWMqbSKe0s?utm_source=generator&theme=0"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
</script>
