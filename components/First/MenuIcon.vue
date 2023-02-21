<template>
  <button
    class="absolute top-0 flex items-center text-2xl sm:hidden text-light right-4 h-28"
    @click="toggleMenu"
  >
    <NuxtIcon :name="`social/${icon}`" filled />
  </button>
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
