import { ref, onMounted, onUnmounted } from 'vue'

export default function useHomeDropdowns(): any {
    const topSellingFilterOpen = ref<boolean>(false)
    const topSellingElement = ref<HTMLElement | null>(null)

    const customerChartFilterOpen = ref<boolean>(false)
    const customerChartElement = ref<HTMLElement | null>(null)

    const toggleDropdown = (clickedDropdown: string): void => {
        if (clickedDropdown === 'topSelling') {
            topSellingFilterOpen.value = !topSellingFilterOpen.value
            customerChartFilterOpen.value = false
        }
        if (clickedDropdown === 'customerChartFilter') {
            customerChartFilterOpen.value = !customerChartFilterOpen.value
            topSellingFilterOpen.value = false
        }
    }

    const handleClickOutside = (event: Event): void => {
        if (topSellingElement.value && !topSellingElement.value.contains(event.target as Node)) {
            topSellingFilterOpen.value = false
        }
        if (customerChartElement.value && !customerChartElement.value.contains(event.target as Node)) {
            customerChartFilterOpen.value = false
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
        customerChartFilterOpen,
        customerChartElement,
        toggleDropdown
    }

}