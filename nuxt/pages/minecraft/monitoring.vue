<template>
  <NuxtLayout name="wrapper">
    <div class="flex flex-col w-full gap-8 grow">
      <div class="flex flex-col-reverse justify-between gap-8 sm:flex-row">
        <div class="flex gap-4 grow">
          <button
            class="px-5 py-4 rounded-lg bg-dark-alt border border-dark-alt hover:border-dark-border-alt"
            @click="refreshStatus"
          >
            <NuxtIcon
              name="feather/refresh-ccw"
              filled
              class="text-[1.5rem] refresh block"
            />
          </button>
          <Button
            class="bg-dark-alt grow sm:grow-0 border border-dark-alt hover:border-dark-border-alt cursor-default"
          >
            <span class="truncate">
              {{ status.version?.name_clean.split(' ')[1] }}
              <span class="text-dark-secondary">/</span>
              {{ `${status.players?.online}/${status.players?.max}` }}
            </span>
          </Button>
          <Button
            :name="isMap ? t('monitoring.players') : t('monitoring.map')"
            @click="isMap = !isMap"
            class="bg-dark-alt max-w-fit border border-dark-alt hover:border-dark-border-alt"
          />
        </div>
        <div class="flex gap-4">
          <NuxtLink
            to="https://discord.gg/xDknD7uG"
            target="_blank"
            class="flex items-center justify-center px-5 py-4 text-dark rounded-lg bg-light hover:bg-light-secondary"
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
            class="bg-light hover:bg-light-secondary text-dark"
          >
            <NuxtIcon name="feather/copy" filled class="text-[1.5rem]" />
          </Button>
        </div>
      </div>
      <iframe
        src="https://rihterb.my.pebble.host"
        class="w-full rounded-lg aspect-square sm:aspect-video"
        v-show="isMap"
      />
      <table
        v-show="!isMap"
        class="rounded-lg outline outline-1 outline-dark-border-alt bg-dark-alt"
        v-if="status!.players?.list.length! > 0"
      >
        <tr
          v-for="n in status.players?.list.length"
          :key="n"
          class="flex gap-4 px-6 py-4 border-b border-dark-border-alt last-of-type:border-none"
        >
          <td class="text-dark-secondary">{{ n }}</td>
          <td>{{ status.players?.list[n - 1].name_clean }}</td>
        </tr>
      </table>
      <div
        class="flex flex-col items-center justify-center gap-8 mx-auto grow w-fit"
        v-else-if="!isMap"
      >
        <NuxtImg src="minecraft/no_players.webp" rel="preload" />
        <h2 class="text-h-lg-700 text-dark-secondary select-none">
          {{ $t('monitoring.no_players') }}
        </h2>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { statusJava } from 'node-mcstatus'

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
