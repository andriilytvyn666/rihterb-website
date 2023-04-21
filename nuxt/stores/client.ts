import { defineStore } from 'pinia'

export const useClientStore = defineStore('client-store', () => {
  const gatherPages = ref(false)

  const toggleGatherPages = () => {
    gatherPages.value = !gatherPages.value
  }

  return { gatherPages, toggleGatherPages }
})
