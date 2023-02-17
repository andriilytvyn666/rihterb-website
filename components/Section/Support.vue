<template>
  <div class="custom-banner rounded-lg">
    <div class="custom-mask">
      <div
        class="flex justify-between h-64 items-center min-[320px]:sm:pl-4 md:pl-4 lg:pl-16 pr-12"
      >
        <div class="grid lg:grid-cols-2 grid-rows-2 gap-6">
          <ButtonSupport
            link="https://www.patreon.com/vasilyrichter"
            type="patreon"
          />
          <ButtonSupport
            link="https://vasilyrichter.bandcamp.com/"
            type="bandcamp"
          />
          <ButtonSupport link="https://rihterb.diaka.ua/donate" type="diaka" />
        </div>
        <div class="flex flex-col gap-4 font-bold w-[32rem] text-right">
          <span class="text-highlight text-4xl">Підтримайте мене</span>
          <span class="text-light text-3xl">
            Щоб я продовжував робити українську музику
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.custom-banner {
  background-image: url('/banner.webp');
}
.custom-mask {
  background-image: linear-gradient(
    90deg,
    rgba(8, 8, 8, 0.7) 0%,
    rgba(8, 8, 8, 0.9) 58.94%
  );
}
</style>
