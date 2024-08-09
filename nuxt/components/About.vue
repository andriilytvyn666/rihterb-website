<template>
  <div class="flex flex-col gap-4 min-w-[25rem] w-full md:w-fit">
    <div class="flex border rounded-2xl aspect-square overflow-clip border-bg1">
      <NuxtImg src="userpic.png" class="w-full h-full" />
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1">
        <h1
          class="font-inter text-title text-accent leading-1 whitespace-nowrap"
        >
          Вася Ріхтер
        </h1>
        <h2 class="font-sans leading- whitespace-nowrap text-body">
          граю музику для вас і ваших мам
        </h2>
      </div>
      <div class="flex gap-2">
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="spotify"
          icon="simple-icons:spotify"
          primary
        />
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="apple music"
          icon="simple-icons:applemusic"
          primary
        />
        <ButtonLink
          link="https://google.com"
          target="_blank"
          title="yt music"
          icon="simple-icons:youtubemusic"
          primary
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
