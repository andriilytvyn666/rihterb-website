<template>
  <header
    id="header"
    class="flex items-center justify-between h-20 mx-4 mt-6 px-4"
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
    <NavDesktop />
  </header>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "header"][0]
    {_id, logo}`

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
