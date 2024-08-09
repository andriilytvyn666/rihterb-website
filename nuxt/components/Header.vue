<template>
  <div class="flex justify-between w-full p-6 bg-black">
    <NuxtLink to="/" class="flex justify-center gap-3">
      <NuxtImg src="logo-header.webp" alt="logo" class="w-5 h-5" />
      <h1 class="text-[#F8A711] text-logo">Вася Ріхтер</h1>
    </NuxtLink>
    <div class="flex gap-6">
      <HeaderLink
        title="лінк"
        icon="simple-icons:spotify"
        link="https://google.com"
        target="_blank"
      />
      <HeaderLink
        title="лінк"
        icon="simple-icons:spotify"
        link="https://google.com"
        target="_blank"
      />
      <HeaderLink
        title="лінк"
        icon="simple-icons:spotify"
        link="https://google.com"
        target="_blank"
      />
      <HeaderLink
        title="лінк"
        icon="simple-icons:spotify"
        link="https://google.com"
        target="_blank"
      />
    </div>
  </div>
</template>
