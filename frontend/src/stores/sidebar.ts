import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
    const isOpen = ref<Boolean>(false)

    function sidebarStatus() {
        isOpen.value = !isOpen.value
    }

    return { isOpen, sidebarStatus }
})