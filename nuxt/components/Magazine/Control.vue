<template>
  <div
    class="flex grow gap-4 px-4 sm:px-0 w-screen sm:w-[35rem] max-h-[3.75rem]"
  >
    <button
      id="swiper-prev"
      class="min-w-[3.75rem] hover:bg-dark-alt min-h-[3.75rem] flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
    >
      <NuxtIcon name="feather/arrow-left" filled class="w-6 h-6" />
    </button>
    <Button
      :name="t('magazine.back')"
      class="hover:bg-dark-alt border border-dark-border sm:w-full"
      @click="clientStore.toggleGatherPages"
    />
    <button
      id="swiper-next"
      class="min-w-[3.75rem] hover:bg-dark-alt min-h-[3.75rem] flex items-center justify-center border border-dark-border p-4 rounded-lg text-[1.5rem]"
    >
      <NuxtIcon name="feather/arrow-right" filled class="w-6 h-6" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const clientStore = useClientStore()
</script>
