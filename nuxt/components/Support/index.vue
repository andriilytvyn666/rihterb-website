<template>
  <div class="p-8 rounded-lg bg-dark-alt">
    <div
      class="flex flex-col justify-between w-full gap-8 sm:gap-0 sm:flex-row"
    >
      <div class="flex flex-col gap-8 sm:items-center sm:flex-row">
        <div class="flex flex-col justify-center gap-2">
          <h2 class="line-clamp-2 sm:line-clamp-1 w-fit section-title">
            {{ getLocalizedString($i18n.locale, support.title) }}
          </h2>
          <p class="line-clamp-2 sm:line-clamp-1 text-light section-text">
            {{ getLocalizedString($i18n.locale, support.text) }}
          </p>
        </div>
      </div>
      <Button
        :to="localePath('/support', $i18n.locale)"
        :name="getLocalizedString($i18n.locale, support.buttonName)"
        class="h-fit btn-light"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()

const support = (await store.getMainPage()).support

const localePath = useLocalePath()
</script>
