<template>
  <div class="bg-[#1a1a1a] h-max">
    <!-- TODO: add enter and leave animation for fullscreen menu (leave is tricky) -->
    <AlbumMenuOpen v-if="store.isMenuOpen" />
    <AlbumHeader />
    <slot />
    <AlbumFooter />
  </div>
</template>

<script lang="ts" setup>
import { useFirstStore } from '~~/stores/first'

const store = useFirstStore()
</script>
