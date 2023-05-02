<template>
  <button
    class="min-h-[3.75rem] flex items-center justify-center w-full gap-4 px-6 py-4 rounded-lg text-body-md-500 sm:w-fit flex-nowrap line-clamp-1"
    v-if="to === undefined"
  >
    <slot />
    <span :class="`${name !== undefined ? 'truncate' : 'hidden'}`">{{
      name
    }}</span>
  </button>
  <button
    v-else
    class="min-h-[3.75rem] flex items-center justify-center w-full rounded-lg text-body-md-500 sm:w-fit flex-nowrap line-clamp-1"
  >
    <NuxtLink
      :to="$props.to"
      :target="$props.target === undefined ? '_self' : $props.target"
      class="flex items-center justify-center w-full gap-4 px-6 py-4"
    >
      <slot />
      <span :class="`${name !== undefined ? 'truncate' : 'hidden'}`">{{
        name
      }}</span>
    </NuxtLink>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  name?: string
  to?: string
  target?: string
}>()
</script>
