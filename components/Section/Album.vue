<template>
  <div class="grid gap-5 md:grid-cols-12 sm:grid-cols-1">
    <Bandcamp
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="200"
      class="sm:col-span-6 md:col-span-5 lg:col-span-4"
    />
    <div
      class="flex flex-col gap-[1.125rem] min-[320px]:sm:col-span-4 md:col-span-7 lg:col-span-8"
    >
      <div class="flex flex-col gap-1.5">
        <span class="text-4xl font-bold text-highlight-secondary"
          >Концерт у Львові // live in Lviv</span
        >
        <span class="text-xl font-semibold text-light-secondary"
          >Грудень 2022</span
        >
      </div>
      <div class="text-3xl font-bold text-light">
        <div class="flex flex-col">
          <p class="w-fit">
            Лорем ипсум долор сит амет, ут еним фалли сентентиае меи. Яуи
            импедит проприае ут. Ид ессе пробо дуо, усу ид цоммодо цонституто.
          </p>
          <br />
          <p>
            Яуодси трацтатос еам. Дигниссим интерпретарис пер еу. Не вел муциус
            дефинитионем. Ет поссим абхорреант пхилосопхиа меа, те дебитис
            плацерат сед.
          </p>
          <br />
        </div>
        <iframe
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :delay="200"
          class="w-full min-[320px]:max-sm:h-[16rem] sm:h-[20rem] md:h-[14.8rem] lg:h-[26.93rem] rounded-lg"
          src="https://www.youtube-nocookie.com/embed/sTOCdJFvKYs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>
