<template>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto px-4"
  >
    <div
      class="bg-light shadow-default p-8 gap-8 flex w-full flex-col items-center sm:w-[38rem] rounded-lg"
    >
      <div class="gap-5 flex flex-col items-center">
        <h2 class="text-h-lg-700 text-hl-blue line-clamp-1">
          {{ getLocalizedString($i18n.locale, magazine.title) }}
        </h2>
        <p class="text-body-md-500 text-dark text-center line-clamp-4">
          {{ getLocalizedString($i18n.locale, magazine.text) }}
        </p>
      </div>
      <div class="flex gap-4 flex-col sm:flex-row w-full">
        <Button
          :name="t('magazine.view')"
          class="btn-dark-outline sm:w-full"
          @click="clientStore.toggleGatherPages"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const clientStore = useClientStore()

const store = useSanityStore()
const magazine = await store.getMagazinePage()
</script>
