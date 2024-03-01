import { ref, onMounted, onUnmounted } from 'vue'

export default function useHomeDropdowns() {
    const topSellingFilterOpen = ref<boolean>(false)
    const topSellingElement = ref<HTMLElement | null>(null)

    const toggleDropdown = (clickedDropdown: string): void => {
        if (clickedDropdown === 'topSelling') {
            topSellingFilterOpen.value = !topSellingFilterOpen.value
        }
    }

    const handleClickOutside = (event: Event): void => {
        if (topSellingElement.value && !topSellingElement.value.contains(event.target as Node)) {
            topSellingFilterOpen.value = false
        }
    } 

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    return {
        topSellingFilterOpen,
        topSellingElement,
        toggleDropdown
    }

}