<template>
  <div
    class="flex grow gap-4 px-4 sm:px-0 w-[22rem] sm:w-[31rem] max-h-[3.75rem] [&>*]:rounded-lg"
  >
    <button
      id="swiper-prev"
      class="flex items-center justify-center btn-dark-outline p-4 text-[1.5rem]"
    >
      <NuxtIcon name="feather/arrow-left" filled class="w-6 h-6" />
    </button>
    <Button
      :name="t('magazine.back')"
      class="btn-dark-outline sm:w-full"
      @click="clientStore.toggleGatherPages"
    />
    <button
      id="swiper-next"
      class="flex items-center justify-center btn-dark-outline p-4 text-[1.5rem]"
    >
      <NuxtIcon name="feather/arrow-right" filled class="w-6 h-6" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const clientStore = useClientStore()
</script>
