<template>
  <div class="flex flex-col items-center gap-8 sm:items-stretch sm:flex-row">
    <SanityImage
      :asset-id="about.photo.asset._ref"
      w="334"
      h="334"
      rel="preload"
      class="rounded-lg w-[20.875rem] h-[20.875rem] sm:w-[17.875rem] sm:h-[17.875rem] shadow-default"
    />
    <div class="flex flex-col justify-between gap-8 sm:gap-0">
      <div class="flex flex-col text-center sm:text-left">
        <h2 class="section-title">
          {{ getLocalizedString($i18n.locale, about.name) }}
        </h2>
        <h3 class="section-text text-dark-secondary">
          {{ getLocalizedString($i18n.locale, about.subtitle) }}
        </h3>
      </div>
      <p class="text-center text-body-lg-600 text-light sm:text-left">
        <span class="hidden sm:inline select-text">
          <p class="line-clamp-4">
            {{ getLocalizedString($i18n.locale, about.description) }}
          </p>
        </span>
        <span class="sm:hidden select-text">
          {{ getLocalizedString($i18n.locale, about.description) }}
        </span>
      </p>
      <!-- TODO: create component css classes to group common styles -->
      <div class="flex flex-col gap-4 sm:flex-row">
        <Button
          :to="about.listenLink"
          class="btn-highlight"
          :name="getLocalizedString($i18n.locale, about.listenName)"
        />
        <Button
          :to="about.socialLink"
          class="btn-light"
          :name="getLocalizedString($i18n.locale, about.socialName)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const about = (await store.getMainPage()).about
</script>
