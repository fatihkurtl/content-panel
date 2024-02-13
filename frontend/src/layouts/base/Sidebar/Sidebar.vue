<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import router from '@/router'
import { routeIcons } from './sidebar-icons'
import userImage from '@/assets/user.png'
import { useSidebarStore } from '@/stores/sidebar'

const sidebar = useSidebarStore()

</script>

<template>
    <aside
    :class="{
      'translate-x-0': sidebar.isOpen,
      '-translate-x-full': !sidebar.isOpen
    }"
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-darkSideNavColor border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-darkSideNavColor dark:bg-gray-800">
            <div class="flex items-center p-4 space-x-4 bg-slate-700 rounded-lg">
                <img class="w-10 h-10 rounded-full" :src="userImage" alt="user photo">
                <div>
                    <p class="text-lg font-semibold text-white">Neil Sims</p>
                    <p class="text-sm text-gray-300">neil.sims@flowbite.com</p>
                </div>
            </div>
            <span class="text-sm text-gray-400">Menüler</span>
            <ul class="space-y-2 font-medium">
                <li v-for="(route, index) in router.getRoutes()" :key="index">
                <!-- v-if="route.path !== '/:pathMatch(.*)*'" -->
                    <!-- && !(route.name as string).includes('Crud') -->
                    <RouterLink :to="route.path" 
                        v-if="route.meta.requiresAuth === true"
                        active-class="bg-slate-600"
                        class="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-700 group">
                        <span
                            class="material-symbols-outlined w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-gray-100">
                            {{ routeIcons[route.path] }}
                        </span>
                        <span class="ms-3">{{ route.name }}</span>
                    </RouterLink>
                </li>        
            </ul>
        </div>
    </aside>
</template>

<style scoped></style>


