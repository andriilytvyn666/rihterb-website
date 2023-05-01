<template>
  <div
    class="absolute w-full px-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-auto"
  >
    <div
      class="bg-light shadow-default p-8 gap-8 flex w-full flex-col items-center sm:w-[38rem] rounded-lg"
    >
      <div class="flex flex-col items-center gap-5">
        <h2 class="text-h-lg-700 text-hl-blue line-clamp-1">
          {{ getLocalizedString($i18n.locale, magazine.title) }}
        </h2>
        <p class="text-center text-body-md-500 text-dark line-clamp-4">
          {{ getLocalizedString($i18n.locale, magazine.text) }}
        </p>
      </div>
      <div class="flex flex-col w-full gap-4 sm:flex-row">
        <Button
          :name="t('magazine.view')"
          class="btn-dark-outline sm:w-full"
          @click="clientStore.toggleGatherPages"
        >
          <NuxtIcon name="feather/maximize-2" filled />
        </Button>
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
