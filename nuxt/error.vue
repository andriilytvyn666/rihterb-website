<template>
  <NuxtLayout>
    <div
      class="flex flex-col items-center justify-center w-full gap-4 mb-8 grow"
    >
      <NuxtImg
        src="/404.webp"
        alt="404"
        class="w-[18.75rem]"
        :modifiers="{ animated: true }"
      />

      <div class="flex flex-col items-center gap-1">
        <h1 class="text-caption text-accent">
          {{
            $i18n.locale === 'en'
              ? '404 - Page Not Found'
              : '404 - я не зроз ти шо дурак'
          }}
        </h1>
      </div>
      <ButtonLink
        :title="`${$i18n.locale === 'en' ? 'to homepage' : 'на головну'}`"
        :link="localePath('/')"
        class="w-[18.75rem]"
        icon="mdi:arrow-left"
        :open-in-new-tab="false"
        :primary="false"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
</script>
