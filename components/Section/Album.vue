<template>
  <div class="flex gap-8">
    <Bandcamp
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{ opacity: 1 }"
      :delay="200"
    />
    <div class="flex flex-col gap-[1.125rem]">
      <div class="flex flex-col gap-1.5">
        <span class="text-4xl text-highlight-secondary font-bold"
          >Концерт у Львові // live in Lviv</span
        >
        <span class="text-xl text-light-secondary font-semibold"
          >Грудень 2022</span
        >
      </div>
      <div class="text-light text-3xl font-bold">
        <div class="flex flex-col">
          <p>
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
          :initial="{ opacity: 0 }"
          :visibleOnce="{ opacity: 1 }"
          :delay="200"
          class="w-[47.875rem] h-[26.93rem] rounded-lg"
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
