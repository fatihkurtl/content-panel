import { ref, onMounted, onUnmounted } from 'vue'

export default function useCustomersDropdowns(): any {

    const options = ref<boolean>(false)
    const optionsElement = ref<HTMLElement | null>(null)

    const toggleDropdown = (): void => {
        options.value = !options.value
    }

    const handleClickOutside = (event: Event): void => {
        if (optionsElement.value && !optionsElement.value.contains(event.target as Node)) {
            options.value = false
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    return {
        options,
        optionsElement,
        toggleDropdown
    }

}