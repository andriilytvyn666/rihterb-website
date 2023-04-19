<template>
  <div class="flex flex-col w-full gap-8 grow">
    <div class="flex flex-col-reverse justify-between gap-8 sm:flex-row">
      <div class="flex gap-4">
        <button class="px-5 py-4 rounded-lg bg-dark-alt" @click="refreshStatus">
          <NuxtIcon
            name="feather/refresh-ccw"
            filled
            class="text-[1.5rem] refresh block"
          />
        </button>
        <Button class="bg-dark-alt">
          <span>{{ status.version?.name_clean.split(' ')[1] }}</span>
          <span class="text-dark-secondary">/</span>
          <span>{{ `${status.players?.online}/${status.players?.max}` }}</span>
        </Button>
        <Button
          :name="isMap ? 'гравці' : 'мапа'"
          @click="isMap = !isMap"
          class="bg-dark-alt"
        />
      </div>
      <Button
        name="rihterb.my.pebble.host"
        @click="copyToClipboard"
        class="bg-light text-dark"
      >
        <NuxtIcon name="feather/copy" filled class="text-[1.5rem]" />
      </Button>
    </div>
    <iframe
      src="http://rihterb.my.pebble.host:8014/"
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
      <NuxtImg src="empty.png" />
      <h2 class="text-h-lg-700 text-dark-secondary">поки нікого :(</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { statusJava } from 'node-mcstatus'

const isMap = ref(false)
const status = ref(await statusJava('rihterb.my.pebble.host', 25565))

const copyToClipboard = () => {
  navigator.clipboard.writeText('rihterb.my.pebble.host')
}

const refreshStatus = async () => {
  status.value = await statusJava('rihterb.my.pebble.host', 25565)
}
</script>
