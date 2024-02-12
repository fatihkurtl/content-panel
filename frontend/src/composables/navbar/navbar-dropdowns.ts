import { ref, onMounted, onUnmounted } from 'vue'

export default function useNavbarDropdowns() {

    const userMenuOpen = ref<boolean>(false)
    const userMenuElement = ref<HTMLElement | null>(null)

    const notificationsMenuOpen = ref<boolean>(false)
    const notifationMenuElement = ref<HTMLElement | null>(null)

    const toggleDropdown = (clickedDropdown: string) => {
        if (clickedDropdown === 'user') {
            userMenuOpen.value = !userMenuOpen.value
            notificationsMenuOpen.value = false            
        }
        if (clickedDropdown === 'notification') {
            notificationsMenuOpen.value = !notificationsMenuOpen.value
        }
    }

    const handleClickOutside = (event: Event) => {
        if (userMenuElement.value && !userMenuElement.value.contains(event.target as Node)) {
            userMenuOpen.value = false
        }
        if (notifationMenuElement.value && !notifationMenuElement.value.contains(event.target as Node)) {
            notificationsMenuOpen.value = false
        }
    }
    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })

    return {
        userMenuOpen,
        userMenuElement,
        notificationsMenuOpen,
        notifationMenuElement,
        toggleDropdown
    }
}