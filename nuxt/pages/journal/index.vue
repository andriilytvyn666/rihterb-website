<template>
  <NuxtLayout name="nowrapper">
    <JournalBg class="" />
    <div class="h-full w-full grow flex items-center justify-center">
      <transition name="fade">
        <div
          :class="`duration-600 bg-light shadow-default p-8 gap-8 flex flex-col items-center w-[40rem] rounded-lg`"
          v-if="!store.gatherPages"
        >
          <div class="gap-5 flex flex-col items-center">
            <h2 class="text-h-lg-700 text-hl-blue">журнал “дев’ять”</h2>
            <p class="text-body-md-500 text-dark">
              У журналі "дев'ять" ви знайдете цікаві статті про новітні
              тенденції у світі мистецтва та літератури та роздуми про глибинні
              філософські питання.
            </p>
          </div>
          <div class="flex gap-4">
            <NuxtLink :to="localePath('/', $i18n.locale)">
              <Button name="на головну" class="border text-dark border-dark" />
            </NuxtLink>
            <!-- <NuxtLink :to="localePath('/journal/view', $i18n.locale)"> -->
            <Button
              name="дивитись"
              class="bg-dark text-light"
              @click="store.toggleGatherPages"
            />
            <!-- </NuxtLink> -->
          </div>
        </div>
      </transition>
    </div>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
.fade-enter-from {
  @apply opacity-0;
}
.fade-enter-to {
  @apply opacity-100;
}
.fade-enter-active {
  @apply transition-all duration-300 ease-in-out;
}

.fade-leave-from {
  @apply opacity-100;
}
.fade-leave-to {
  @apply opacity-0;
}
</style>

<script lang="ts" setup>
import { useClientStore } from '../../stores/client'

const localePath = useLocalePath()

const store = useClientStore()
</script>
