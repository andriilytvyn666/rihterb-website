<template>
  <div class="flex flex-col gap-4">
    <div
      class="w-[25rem] h-[25rem] rounded-2xl aspect-square flex overflow-clip"
    >
      <NuxtImg src="userpic.png" class="w-full h-full" />
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1">
        <h1
          class="font-inter text-title text-accent leading-1 whitespace-nowrap"
        >
          Вася Ріхтер
        </h1>
        <h2 class="leading- whitespace-nowrap">
          граю музику для вас і ваших мам
        </h2>
      </div>
      <div class="flex gap-2">
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="spotify"
          icon="simple-icons:spotify"
        />
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="apple music"
          icon="simple-icons:applemusic"
        />
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="yt music"
          icon="simple-icons:youtubemusic"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
