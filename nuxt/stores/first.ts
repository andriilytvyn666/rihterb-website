import { defineStore } from 'pinia'

export const useFirstStore = defineStore('first-store', () => {
  const isMenuOpen = ref<boolean>(false)

  const openMenu = () => {
    isMenuOpen.value = true
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  return { isMenuOpen, openMenu, closeMenu }
})
