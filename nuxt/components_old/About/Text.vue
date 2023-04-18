<template>
  <div class="flex flex-col gap-[1.125rem]">
    <div class="flex flex-col gap-1 text-center about-heading">
      <span class="text-4xl font-bold text-highlight">{{ props.name }}</span>
      <span class="text-xl font-semibold text-light-secondary">
        {{ props.subtitle }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  subtitle: string
}>()
</script>

<style lang="postcss">
@screen md {
  .about-heading {
    @apply text-left;
  }
  .about-description {
    @apply text-xl;
  }
}

@screen lg {
  .about-description {
    @apply text-3xl;
  }
}
</style>
