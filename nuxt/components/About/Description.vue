<template>
  <div class="flex flex-col gap-[1.125rem]">
    <div>
      <p
        class="text-2xl font-semibold leading-snug select-text text-light about-description selection:bg-light-secondary"
      >
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string
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
    @apply text-2xl;
  }
}
</style>
