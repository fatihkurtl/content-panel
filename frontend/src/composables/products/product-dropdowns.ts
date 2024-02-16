import { ref, onMounted, onUnmounted } from 'vue'

export default function useProductDropdowns() {
    const productFilterOpen = ref<boolean>(false)
    const productFilterElement = ref<HTMLElement | null>(null)

    const productCategoryFilterOpen = ref<boolean>(false)
    const productCategoryElement = ref<HTMLElement | null>(null)

    const productBrandFilterOpen = ref<boolean>(false)
    const productBrandElement = ref<HTMLElement | null>(null)

    const toggleDropdown = (clickedDropdown: string): void => {
        if (clickedDropdown === 'filter') {
            productFilterOpen.value = !productFilterOpen.value
            productCategoryFilterOpen.value = false
            productBrandFilterOpen.value = false
        }
        if (clickedDropdown === 'category') {
            productCategoryFilterOpen.value = !productCategoryFilterOpen.value
            productFilterOpen.value = false
            productBrandFilterOpen.value = false
        }
        if (clickedDropdown === 'brand') {
            productBrandFilterOpen.value = !productBrandFilterOpen.value
            productFilterOpen.value = false
            productCategoryFilterOpen.value = false
        }
    }

    const handleClickOutside = (event: Event): void => {
        if (productFilterElement.value && !productFilterElement.value.contains(event.target as Node)) {
            productFilterOpen.value = false
        }
        if (productCategoryElement.value && !productCategoryElement.value.contains(event.target as Node)) {
            productCategoryFilterOpen.value = false
        }
        if (productBrandElement.value && !productBrandElement.value.contains(event.target as Node)) {
            productBrandFilterOpen.value = false
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    return {
        productFilterOpen,
        productFilterElement,
        productCategoryFilterOpen,
        productCategoryElement,
        productBrandFilterOpen,
        productBrandElement,
        toggleDropdown
    }

}