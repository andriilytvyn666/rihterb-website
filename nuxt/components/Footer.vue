<template>
  <div class="flex flex-col w-full px-6 py-5 font-inter text-bg1">
    <div class="flex gap-2">
      <button class="hover:text-fg2 text-footer">English</button>
      <button class="hover:text-fg2 text-footer">Українська</button>
    </div>
    <div class="flex gap-2">
      <span class="text-footer">Copyright © 2023 Василій Ріхтер</span>
      <span>/</span>
      <NuxtLink
        to="https://nneeeooo.pp.ua"
        target="_blank"
        class="hover:text-fg2 hover:underline text-footer"
      >
        Design & Development by Andrii Lytvyn
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
