<template>
  <div class="absolute top-0 flex items-center h-24 right-10">
    <button class="text-2xl lg:hidden text-light" @click="toggleMenu">
      <NuxtIcon :name="`social/${icon}`" filled />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useFirstStore } from '~~/stores/first'

const store = useFirstStore()

const icon = ref<string>('menu')

const toggleMenu = () => {
  if (store.isMenuOpen) {
    store.closeMenu()
    icon.value = 'menu'
  } else {
    store.openMenu()
    icon.value = 'x'
  }
}
</script>
