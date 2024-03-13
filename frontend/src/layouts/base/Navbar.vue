<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import userImage from '@/assets/user.png'
import awsIcon from '@/assets/aws_icon.png'
import { useSidebarStore } from '../../stores/sidebar'
import useNavbarDropdowns from '@/composables/navbar/navbar-dropdowns'
import Progress from '@/components/Global/Progress.vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const appName = ref<string>(import.meta.env.VITE_APP_NAME)

const currentUser = ref()
const isAuth = ref()

onMounted(async () => {
  currentUser.value = await authStore.user
  isAuth.value = await authStore.isAuth
})

const {
  userMenuOpen,
  userMenuElement,
  notificationsMenuOpen,
  notifationMenuElement,
  toggleDropdown,
} = useNavbarDropdowns()


const { sidebarStatus } = useSidebarStore()
const sidebar = useSidebarStore()

const handleLogout = async () => {
  await authStore.logout()
  location.href = '/login'
}

</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-darkSideNavColor border-b border-gray-800 dark:bg-gray-800 dark:border-gray-700">
    <!-- <Progress /> -->
    <div class="px-3 py-3 lg:px-5 lg:pl-3 ">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button @click="sidebarStatus" data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar" type="button"
            :class="{ 'text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200': sidebar.isOpen }"
            class="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <a href="/" class="flex ms-2 md:me-24">
            <img :src="awsIcon" class="h-8 me-3" alt="FlowBite Logo" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
              {{ appName }}
            </span>
          </a>
        </div>
        <div class="flex items-center">
          <div ref="notifationMenuElement" class="flex items-center ms-3">
            <!-- Notifications -->
            <button @click="toggleDropdown('notification')" type="button" data-dropdown-toggle="notification-dropdown"
              :class="{ 'text-gray-50': notificationsMenuOpen }"
              class="p-2 mr-1 text-gray-400 rounded-lg hover:text-gray-300 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
              <span class="sr-only">View notifications</span>
              <!-- Bell icon -->
              <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                </path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div :class="{ 'hidden': !notificationsMenuOpen }"
              class="overflow-hidden absolute mt-28 top-0 right-0 z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-lg"
              id="notification-dropdown">
              <div
                class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                Notifications
              </div>
              <div>
                <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div class="flex-shrink-0">
                    <img class="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      alt="Bonnie Green avatar" />
                    <div
                      class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                      <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                        </path>
                        <path
                          d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      New message from
                      <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All
                      set for the presentation?"
                    </div>
                    <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div class="flex-shrink-0">
                    <img class="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar" />
                    <div
                      class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                      <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">Jese leos</span>
                      and
                      <span class="font-medium text-gray-900 dark:text-white">5 others</span>
                      started following you.
                    </div>
                    <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                      10 minutes ago
                    </div>
                  </div>
                </a>
                <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div class="flex-shrink-0">
                    <img class="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                      alt="Joseph McFall avatar" />
                    <div
                      class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                      <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
                      and
                      <span class="font-medium text-gray-900 dark:text-white">141 others</span>
                      love your story. See it and view more stories.
                    </div>
                    <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                      44 minutes ago
                    </div>
                  </div>
                </a>
                <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                  <div class="flex-shrink-0">
                    <img class="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                      alt="Roberta Casas image" />
                    <div
                      class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                      <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span>
                      mentioned you in a comment:
                      <span class="font-medium text-primary-600 dark:text-primary-500">@bonnie.green</span>
                      what do you say?
                    </div>
                    <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                      1 hour ago
                    </div>
                  </div>
                </a>
                <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex-shrink-0">
                    <img class="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                      alt="Robert image" />
                    <div
                      class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                      <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="pl-3 w-full">
                    <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      <span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span>
                      posted a new video: Glassmorphism - learn how to implement
                      the new design trend.
                    </div>
                    <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                      3 hours ago
                    </div>
                  </div>
                </a>
              </div>
              <a href="#"
                class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
                <div class="inline-flex items-center">
                  <svg aria-hidden="true" class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  View all
                </div>
              </a>
            </div>
            <!-- Notifications -->
            <div ref="userMenuElement">
              <button @click="toggleDropdown('user')" type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" :src="userImage" alt="user photo">
              </button>

              <div :class="{ 'hidden': !userMenuOpen }"
                class="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p v-if="isAuth && currentUser" class="text-sm text-gray-900 dark:text-white" role="none">
                    Auth: {{ isAuth }}
                  </p>
                  <p v-if="isAuth && currentUser" class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    {{ currentUser.displayName }}
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a href="#"
                      class="block px-4 py-2 mx-2 my-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Dashboard</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 mx-2 my-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Settings</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block px-4 py-2 mx-2 my-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Earnings</a>
                  </li>
                  <li>
                    <a href="#"
                    @click="handleLogout"
                      class="block px-4 py-2 mx-2 my-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>