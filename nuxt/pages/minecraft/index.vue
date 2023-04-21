<template>
  <NuxtLayout name="wrapper">
    <div class="grid lg:grid-cols-2 md:flex-row gap-8 w-full justify-center">
      <div class="flex flex-col gap-8 w-full text-body-lg-600">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-5">
            <h2 class="text-h-lg-700 text-hl-yellow text-center">
              ріхтера сервер
            </h2>
            <p>
              запрошуємо приєднатися до сервера, де гравці можуть досліджувати
              світ та будувати що завгодно, не маючи жодних обмежень чи правил.
            </p>
          </div>
          <ul class="list-disc ml-5">
            <li>версія 1.19.4</li>
            <li>мапа сервера</li>
            <li>анархія</li>
            <li>без приватів</li>
            <li>без донату</li>
            <li>дружня спільнота</li>
          </ul>
        </div>
        <!-- TODO: fix width on md breakpoint -->
        <div class="grid gap-4 w-full [&>*]:w-full">
          <Button
            name="rihterb.my.pebble.host"
            @click="copyToClipboard"
            class="bg-light text-dark sm:w-full"
          >
            <NuxtIcon name="feather/copy" filled class="text-[1.5rem]" />
          </Button>
          <NuxtLink :to="localePath('/minecraft/monitoring', $i18n.locale)">
            <Button
              name="моніторинг"
              class="border border-dark-border sm:w-full"
            >
              <NuxtIcon
                name="feather/bar-chart-2"
                class="text-[1.5rem]"
                filled
              />
            </Button>
          </NuxtLink>
          <NuxtLink to="https://rihterb.my.pebble.host/" target="_blank">
            <Button name="мапа" class="border border-dark-border sm:w-full">
              <NuxtIcon name="feather/map" class="text-[1.5rem]" filled />
            </Button>
          </NuxtLink>
          <NuxtLink to="https://discord.gg/xDknD7uG" target="_blank">
            <Button name="дискорд" class="border border-dark-border sm:w-full">
              <NuxtIcon name="social/discord" class="text-[1.5rem]" filled />
            </Button>
          </NuxtLink>
        </div>
      </div>
      <NuxtImg
        src="m2.webp"
        class="aspect-square md:aspect-auto md:h-full object-cover rounded-lg w-full"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()

const copyToClipboard = () => {
  navigator.clipboard.writeText('rihterb.my.pebble.host')
}
</script>
