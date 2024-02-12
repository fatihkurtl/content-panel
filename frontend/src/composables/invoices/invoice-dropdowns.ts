import { ref, onMounted, onUnmounted } from 'vue'

export default function useInvoiceDropdowns() {

    const tableActionDropdownOpen = ref<boolean>(false)
    const tableActionDropdownElement = ref<HTMLElement | null>(null)

    const tableFilterDropdownOpen = ref<boolean>(false)
    const tableFilterDropdownElement = ref<HTMLElement | null>(null)

    const tableChoicesOpen = ref<boolean>(false)
    const tableChoicesElement = ref<HTMLElement | null>(null)

    const toggleDropdown = (clickedDropdown: string) => {
        if (clickedDropdown === 'action') {
            tableActionDropdownOpen.value = !tableActionDropdownOpen.value
            tableFilterDropdownOpen.value = false
            tableChoicesOpen.value = false
        }
        if (clickedDropdown === 'filter') {
            tableFilterDropdownOpen.value = !tableFilterDropdownOpen.value
            tableActionDropdownOpen.value = false
            tableChoicesOpen.value = false
        }
        if (clickedDropdown === 'tableChoices') {
            tableChoicesOpen.value = !tableChoicesOpen.value
            tableFilterDropdownOpen.value = false
            tableActionDropdownOpen.value = false
        }
    }

    const handleClickOutside = (event: Event) => {
        if (tableActionDropdownElement.value && !tableActionDropdownElement.value.contains(event.target as Node)) {
            tableActionDropdownOpen.value = false
        }
        if (tableFilterDropdownElement.value && !tableFilterDropdownElement.value.contains(event.target as Node)) {
            tableFilterDropdownOpen.value = false
        }
        if (tableChoicesElement.value && !tableChoicesElement.value.contains(event.target as Node)) {
            tableChoicesOpen.value = false
        }
    }
    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    return {
        tableActionDropdownOpen,
        tableActionDropdownElement,
        tableFilterDropdownOpen,
        tableFilterDropdownElement,
        tableChoicesOpen,
        tableChoicesElement,
        toggleDropdown
    }
}