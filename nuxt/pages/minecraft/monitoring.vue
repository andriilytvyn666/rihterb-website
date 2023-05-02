<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col w-full gap-8 grow">
      <div class="flex flex-col-reverse justify-between gap-8 md:flex-row">
        <div class="flex gap-4 grow">
          <button
            class="px-5 py-4 border rounded-lg bg-dark-alt border-dark-alt hover:border-dark-border-alt hover:-translate-y-0.5"
            @click="refreshStatus"
          >
            <NuxtIcon
              name="feather/refresh-ccw"
              filled
              class="text-[1.5rem] refresh block"
            />
          </button>
          <Button
            class="border cursor-default bg-dark-alt grow sm:grow-0 border-dark-alt hover:border-dark-border-alt sm:w-full md:w-fit hover:-translate-y-0.5"
          >
            <span class="truncate">
              {{ `${status.players?.online}/${status.players?.max}` }}
            </span>
          </Button>
          <Button
            :name="isMap ? t('monitoring.players') : t('monitoring.map')"
            @click="isMap = !isMap"
            class="border bg-dark-alt max-w-fit border-dark-alt hover:border-dark-border-alt sm:w-full md:w-fit hover:-translate-y-0.5"
          >
            <NuxtIcon :name="`feather/${isMap ? 'user' : 'map'}`" filled />
          </Button>
        </div>
        <div class="flex gap-4">
          <NuxtLink
            :to="minecraft.buttons.discord.link"
            target="_blank"
            class="flex items-center justify-center px-5 py-5 rounded-lg border bg-dark-alt max-w-fit border-dark-alt hover:border-dark-border-alt hover:-translate-y-0.5"
          >
            <NuxtIcon
              name="social/discord"
              filled
              class="text-[1.5rem] refresh block"
            />
          </NuxtLink>
          <Button
            name="rihterb.my.pebble.host"
            @click="copyToClipboard"
            class="sm:w-full md:w-fit btn-light hover:-translate-y-0.5"
          >
            <NuxtIcon name="feather/copy" filled class="text-[1.5rem]" />
          </Button>
        </div>
      </div>
      <iframe
        src="https://rihterb.my.pebble.host"
        class="w-full rounded-lg aspect-square sm:aspect-auto sm:h-[42rem]"
        v-show="isMap"
      />
      <div
        v-if="status!.players?.list.length! > 0"
        v-show="!isMap"
        class="flex w-full overflow-hidden border rounded-lg border-dark-border-alt"
      >
        <table v-show="!isMap" class="w-full bg-dark-alt">
          <tr
            v-for="n in status.players?.list.length"
            :key="n"
            class="flex gap-4 px-6 py-4 border-b border-dark-border-alt last-of-type:border-none"
          >
            <td class="text-dark-secondary">{{ n }}</td>
            <td>{{ status.players?.list.sort()[n - 1].name_clean }}</td>
          </tr>
        </table>
      </div>
      <div
        class="flex flex-col items-center justify-center gap-8 mx-auto grow w-fit"
        v-else-if="!isMap"
      >
        <NuxtImg src="minecraft/no_players.webp" rel="preload" />
        <h2 class="select-none text-h-lg-700 text-dark-secondary">
          {{ $t('monitoring.no_players') }}
        </h2>
      </div>
      <Button
        :to="localePath('/minecraft', $i18n.locale)"
        :name="$t('monitoring.back')"
        class="btn-dark-outline hover:-translate-y-0.5"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const minecraft = await store.getMinecraftPage()

import { statusJava } from 'node-mcstatus'
const localePath = useLocalePath()
const { t } = useI18n()

const isMap = ref(false)
const status = ref(await statusJava('rihterb.my.pebble.host', 25565))

const copyToClipboard = () => {
  navigator.clipboard.writeText('rihterb.my.pebble.host')
}

const refreshStatus = async () => {
  status.value = await statusJava('rihterb.my.pebble.host', 25565)
}
</script>
