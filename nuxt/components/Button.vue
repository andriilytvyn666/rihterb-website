<template>
  <button
    class="min-h-[3.75rem] flex items-center justify-center w-full gap-4 px-6 py-4 rounded-lg text-body-md-500 sm:w-fit flex-nowrap line-clamp-1"
    v-if="link === undefined"
  >
    <slot />
    <span :class="`${name !== undefined ? 'truncate' : 'hidden'}`">{{
      name
    }}</span>
  </button>
  <button
    v-else
    class="min-h-[3.75rem] flex items-center justify-center w-full gap-4 px-6 py-4 rounded-lg text-body-md-500 sm:w-fit flex-nowrap line-clamp-1"
  >
    <NuxtLink :to="$props.link">
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
  link?: string
}>()
</script>
