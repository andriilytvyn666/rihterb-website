<template>
  <header
    id="header"
    class="flex items-center justify-between w-full h-20 px-4 mx-4 mt-6"
    v-if="renderCondition"
  >
    <!-- TODO: fix links; add type property for nav links to sanity -->
    <div class="flex items-center gap-3">
      <NuxtLink to="https://rihterb.pp.ua">
        <NuxtImg
          :src="header.logo.asset._ref"
          alt="Ріхтер"
          class="h-12 w-fit"
          width="82"
          height="48"
        />
      </NuxtLink>
    </div>
    <div class="flex gap-3 sm:hidden">
      <ButtonNav
        name=""
        class="text-[#26A5E4] telegram-bg"
        linkType="web"
        target="New page"
        :link="header.linkTelegram"
        icon="telegram2"
      />
      <ButtonNav
        name=""
        class="text-light instagram-bg instagram-custom"
        linkType="web"
        target="New page"
        :link="header.linkInstagram"
        icon="instagram"
      />
    </div>
    <NavDesktop />
  </header>
</template>

<style lang="postcss">
.instagram-custom {
  @apply hover:border-light !important;
}
</style>

<script setup lang="ts">
const query = groq`*[_type == "header"][0]
    {_id, logo, linkTelegram, linkInstagram}`

const { data } = await useSanityQuery<Header>(query)

const header = data.value!

const renderCondition: boolean = header !== undefined && header !== null
</script>

<style lang="postcss">
@screen sm {
  #header {
    @apply w-[38rem];
  }
}

@screen md {
  #header {
    @apply w-[46rem];
  }
}

@screen lg {
  #header {
    @apply w-[62rem];
  }
}

@screen xl {
  #header {
    @apply w-[73.75rem];
  }
}
</style>
