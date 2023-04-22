<template>
  <div class="p-8 rounded-lg bg-dark-alt">
    <div
      class="flex flex-col justify-between w-full gap-8 sm:gap-0 sm:flex-row"
    >
      <div class="flex flex-col gap-8 sm:items-center sm:flex-row">
        <div class="flex flex-col justify-center gap-2">
          <h2
            class="line-clamp-2 sm:line-clamp-1 w-fit text-hl-yellow text-h-lg-700"
          >
            {{ getLocalizedString($i18n.locale, support.title) }}
          </h2>
          <p class="line-clamp-2 sm:line-clamp-1 text-light text-body-md-600">
            {{ getLocalizedString($i18n.locale, support.text) }}
          </p>
        </div>
      </div>
      <NuxtLink :to="localePath('/support', $i18n.locale)">
        <Button
          :name="getLocalizedString($i18n.locale, support.buttonName)"
          class="bg-light text-dark h-fit"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSanityStore } from '../../stores/sanity'

const store = useSanityStore()
const support = await store.getSupport()

const localePath = useLocalePath()
</script>
