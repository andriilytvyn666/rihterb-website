<template>
  <NuxtLayout name="nowrapper">
    <div class="h-full w-full flex items-center justify-center grow">
      <div
        class="bg-light shadow-default p-8 gap-8 flex flex-col items-center w-[40rem] rounded-lg"
      >
        <div class="gap-5 flex flex-col items-center">
          <h2 class="text-h-lg-700 text-hl-blue">журнал “дев’ять”</h2>
          <p class="text-body-md-500 text-dark">
            У журналі "Дев'ять" ви знайдете цікаві статті про новітні тенденції
            у світі мистецтва та літератури та роздуми про глибинні філософські
            питання.
          </p>
        </div>
        <div class="flex gap-4">
          <NuxtLink :to="localePath('/', $i18n.locale)">
            <Button name="на головну" class="border text-dark border-dark" />
          </NuxtLink>
          <NuxtLink :to="localePath('/journal/view', $i18n.locale)">
            <Button name="дивитись" class="bg-dark text-light" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
</script>
