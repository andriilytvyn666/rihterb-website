<template>
  <div class="w-full h-full overflow-hidden">
    <!--h-[49rem]-->
    <iframe
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      :delay="200"
      class="hidden w-full h-full md:block aspect-square"
      src="https://bandcamp.com/EmbeddedPlayer/album=3409926476/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
      seamless
    >
      <a href="https://vasilyrichter.bandcamp.com/album/--4">
        отрывки радости и счастья by рихтер
      </a>
    </iframe>
    <iframe
      class="w-full h-[120px] md:hidden"
      src="https://bandcamp.com/EmbeddedPlayer/album=3409926476/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/"
      seamless
      ><a href="https://vasilyrichter.bandcamp.com/album/--4"
        >отрывки радости и счастья by рихтер</a
      ></iframe
    >
  </div>
</template>
