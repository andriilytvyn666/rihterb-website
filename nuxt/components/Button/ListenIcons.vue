<template>
  <div id="buttons-container" class="grid grid-cols-1 gap-3">
    <ButtonListenIcon
      :name="items[0].title"
      class="text-[#1DB954]"
      :icon="items[0].logo"
      :link="items[0].link"
    />
    <ButtonListenIcon
      :name="items[1].title"
      class="text-[#FF0000]"
      :icon="items[1].logo"
      :link="items[1].link"
    />
    <ButtonListenIcon
      :name="items[2].title"
      class="text-[#FA243C]"
      :icon="items[2].logo"
      :link="items[2].link"
    />
    <ButtonListenIcon
      :name="items[3].title"
      class="text-[#408294]"
      :icon="items[3].logo"
      :link="items[3].link"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  items: Array<ListenLink>
}>()
</script>

<style lang="postcss">
@screen sm {
  #buttons-container {
    @apply grid-cols-2;
  }
}

@screen md {
  #buttons-container {
    @apply grid-cols-3;
  }
}

@screen lg {
  #buttons-container {
    @apply grid-cols-4;
  }
}
</style>
