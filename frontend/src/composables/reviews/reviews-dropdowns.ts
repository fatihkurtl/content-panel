import { ref, onMounted, onUnmounted } from "vue"

export default function useProductDropdowns() {
    const datepickerOpen = ref<boolean>(false)
    const datepickerElement = ref<HTMLElement | null>(null)

    const toggleDropdown = (clickedDropdown: string): void => {
        if (clickedDropdown === 'datepicker') {
            datepickerOpen.value = !datepickerOpen.value
        }
    }

    const handleClickOutside = (event: Event): void => {
        if (datepickerElement.value && !datepickerElement.value.contains(event.target as Node)) {
            datepickerOpen.value = false
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    return {
        datepickerOpen,
        datepickerElement,
        toggleDropdown
    }
}

