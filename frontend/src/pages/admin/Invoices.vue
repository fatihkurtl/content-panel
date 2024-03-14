<script setup lang="ts">
import { ref, provide } from 'vue'
import MainLayout from '@/layouts/admin/MainLayout.vue'
import PreviewModal from '@/components/Invoices/PreviewModal.vue'
import { InvoicesTableHeader, InvoicesChoices, InvoicesFilter, InvoicesActions } from '@/enums/invoices/enums'
import useInvoiceDropdowns from '@/composables/invoices/invoice-dropdowns'
import TableFooter from '@/components/Global/TableFooter.vue'

const {
    tableActionDropdownOpen,
    tableActionDropdownElement,
    tableFilterDropdownOpen,
    tableFilterDropdownElement,
    tableChoicesOpen,
    tableChoicesElement,
    toggleDropdown
} = useInvoiceDropdowns()

const previewModalOpen = ref<boolean>(true)
provide('previewModalOpen', previewModalOpen)


</script>

<template>
    <MainLayout>
        <!-- <div></div> -->
        <section class="bg-mainBgColor dark:bg-gray-900 rounded-lg">
            <div class="min-w-full bg-mainBgColor">
                <!-- Invoice table -->
                <div class="bg-white rounded-lg dark:bg-gray-800 md:pl-70 mx-4 shadow-md sm:rounded-lg overflow-hidden">
                    <div
                        class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div class="w-full md:w-1/2">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Arama</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Arama...">
                                </div>
                            </form>
                        </div>
                        <div
                            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button type="button"
                                class="flex items-center justify-center text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                <!-- <svg class="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                        </svg> -->
                                <!-- <span class="material-symbols-outlined w-6 h-6 mr-2 text-white">
                                    description
                                </span> -->
                                <span class="material-symbols-outlined w-6 h-6 mr-2 text-white">
                                    export_notes
                                </span>
                                Excel'e aktar
                            </button>
                            <div ref="tableActionDropdownElement" class="flex items-center space-x-3 w-full md:w-auto">
                                <button @click="toggleDropdown('action')" id="actionsDropdownButton"
                                    data-dropdown-toggle="actionsDropdown"
                                    class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button">
                                    <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    Seçenekler
                                </button>
                                <div id="actionsDropdown" :class="{ 'hidden': !tableActionDropdownOpen }"
                                    class="absolute mt-56 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm items-end text-gray-700 dark:text-gray-200"
                                        aria-labelledby="actionsDropdownButton">
                                        <li v-for="(choice, index) in InvoicesChoices" :key="index">
                                            <a href="#"
                                                class="block py-2 px-4 mx-2 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                {{ choice }}
                                            </a>
                                        </li>
                                        <!-- <li>
                                            <a href="#"
                                                class="block py-2 px-4 mx-2 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Toplu düzenleme
                                            </a>
                                        </li> -->
                                    </ul>
                                    <div class="py-1">
                                        <a href="#"
                                            class="block py-2 px-4 mx-2 my-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                            Tümünü sil
                                        </a>
                                    </div>
                                </div>
                                <div ref="tableFilterDropdownElement" class="flex items-center space-x-3 w-full md:w-auto">
                                    <button @click="toggleDropdown('filter')" id="filterDropdownButton"
                                        data-dropdown-toggle="filterDropdown"
                                        class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                            class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        Filtre
                                        <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </button>
                                    <div id="filterDropdown" :class="{ 'hidden': !tableFilterDropdownOpen }"
                                        class="absolute mt-40 z-10 w-48 right-0 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                        <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Filtre seçin</h6>
                                        <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                            <li v-for="(filter, index) in InvoicesFilter" :key="index"
                                                class="flex items-center">
                                                <input :id="`filter`+index" :name="`filter`+index" type="checkbox" :value="filter"
                                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                <label :for="`filter`+index"
                                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {{ filter }}
                                                </label>
                                            </li>
                                            <!-- <li class="flex items-center">
                                            <input id="fitbit" type="checkbox" value=""
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                            <label for="fitbit"
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                Aktif değil (16)
                                            </label>
                                        </li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-sm text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th v-for="(header, index) in InvoicesTableHeader" :key="index" scope="col"
                                        class="px-4 py-3">
                                        {{ header }}
                                    </th>
                                    <!-- <th scope="col" class="px-4 py-3">Alıcı</th>
                                    <th scope="col" class="px-4 py-3">Durum</th>
                                    <th scope="col" class="px-4 py-3">Ödeme</th>
                                    <th scope="col" class="px-4 py-3">Tarih</th>
                                    <th scope="col" class="px-4 py-3">Toplam Fiyat</th> -->
                                    <th scope="col" class="px-4 py-3">
                                        <span class="sr-only">Eylemler</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 underline underline-offset-1 whitespace-nowrap dark:text-white">
                                        #INV-46807556</th>
                                    <td class="px-4 py-3">John Doe</td>
                                    <td class="px-4 py-3">
                                        <!-- TODO: class aktif olup olmamasina gore degisecek -->
                                        <span
                                            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Aktif</span>
                                    </td>
                                    <td class="px-4 py-3">Doğrudan banka transferi</td>
                                    <td class="px-4 py-3">25 Mart, 12:55</td>
                                    <td class="px-4 py-3">$2999</td>
                                    <td ref="tableChoicesElement" class="px-4 py-3 flex items-center justify-end">
                                        <button @click="toggleDropdown('tableChoices')" id="apple-imac-27-dropdown-button"
                                            data-dropdown-toggle="apple-imac-27-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-imac-27-dropdown" :class="{ 'hidden': !tableChoicesOpen }"
                                            class="absolute mt-44 mr-12 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-imac-27-dropdown-button">
                                                <li v-for="(action, index) in InvoicesActions" :key="index">
                                                    <a href="#" @click="previewModalOpen = !previewModalOpen"
                                                        class="block py-2 px-4 mx-2 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        {{ action }}
                                                    </a>
                                                </li>
                                                <!-- <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 mx-2 my-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Düzenle
                                                    </a>
                                                </li> -->
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 mx-2 my-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                    Sil
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <PreviewModal />
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 underline underline-offset-1 whitespace-nowrap dark:text-white">
                                        #INV-25807556</th>
                                    <td class="px-4 py-3">Bruce Willis</td>
                                    <td class="px-4 py-3">
                                        <!-- TODO: class aktif olup olmamasina gore degisecek -->
                                        <span
                                            class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                            Aktif değil
                                        </span>
                                    </td>
                                    <td class="px-4 py-3">Ödemeleri kontrol etme</td>
                                    <td class="px-4 py-3">30 Mart, 11:00</td>
                                    <td class="px-4 py-3">$1499</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-imac-20-dropdown-button"
                                            data-dropdown-toggle="apple-imac-20-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-imac-20-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-imac-20-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple
                                        iPhone 14</th>
                                    <td class="px-4 py-3">Phone</td>
                                    <td class="px-4 py-3">Apple</td>
                                    <td class="px-4 py-3">1237</td>
                                    <td class="px-4 py-3">$999</td>
                                    <td class="px-4 py-3">$999</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-iphone-14-dropdown-button"
                                            data-dropdown-toggle="apple-iphone-14-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-iphone-14-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-iphone-14-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple
                                        iPad Air</th>
                                    <td class="px-4 py-3">Tablet</td>
                                    <td class="px-4 py-3">Apple</td>
                                    <td class="px-4 py-3">4578</td>
                                    <td class="px-4 py-3">$1199</td>
                                    <td class="px-4 py-3">$1199</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-ipad-air-dropdown-button"
                                            data-dropdown-toggle="apple-ipad-air-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-ipad-air-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-ipad-air-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox
                                        Series S</th>
                                    <td class="px-4 py-3">Gaming/Console</td>
                                    <td class="px-4 py-3">Microsoft</td>
                                    <td class="px-4 py-3">56</td>
                                    <td class="px-4 py-3">$299</td>
                                    <td class="px-4 py-3">$299</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="xbox-series-s-dropdown-button"
                                            data-dropdown-toggle="xbox-series-s-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="xbox-series-s-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="xbox-series-s-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        PlayStation 5</th>
                                    <td class="px-4 py-3">Gaming/Console</td>
                                    <td class="px-4 py-3">Sony</td>
                                    <td class="px-4 py-3">78</td>
                                    <td class="px-4 py-3">$799</td>
                                    <td class="px-4 py-3">$799</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="playstation-5-dropdown-button"
                                            data-dropdown-toggle="playstation-5-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="playstation-5-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="playstation-5-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox
                                        Series X</th>
                                    <td class="px-4 py-3">Gaming/Console</td>
                                    <td class="px-4 py-3">Microsoft</td>
                                    <td class="px-4 py-3">200</td>
                                    <td class="px-4 py-3">$699</td>
                                    <td class="px-4 py-3">$699</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="xbox-series-x-dropdown-button"
                                            data-dropdown-toggle="xbox-series-x-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="xbox-series-x-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="xbox-series-x-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple
                                        Watch SE</th>
                                    <td class="px-4 py-3">Watch</td>
                                    <td class="px-4 py-3">Apple</td>
                                    <td class="px-4 py-3">657</td>
                                    <td class="px-4 py-3">$399</td>
                                    <td class="px-4 py-3">$399</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="apple-watch-se-dropdown-button"
                                            data-dropdown-toggle="apple-watch-se-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="apple-watch-se-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-watch-se-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">NIKON
                                        D850</th>
                                    <td class="px-4 py-3">Photo</td>
                                    <td class="px-4 py-3">Nikon</td>
                                    <td class="px-4 py-3">465</td>
                                    <td class="px-4 py-3">$599</td>
                                    <td class="px-4 py-3">$599</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="nikon-d850-dropdown-button" data-dropdown-toggle="nikon-d850-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="nikon-d850-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="nikon-d850-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Monitor BenQ EX2710Q</th>
                                    <td class="px-4 py-3">TV/Monitor</td>
                                    <td class="px-4 py-3">BenQ</td>
                                    <td class="px-4 py-3">354</td>
                                    <td class="px-4 py-3">$499</td>
                                    <td class="px-4 py-3">$499</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <button id="benq-ex2710q-dropdown-button"
                                            data-dropdown-toggle="benq-ex2710q-dropdown"
                                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div id="benq-ex2710q-dropdown"
                                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="benq-ex2710q-dropdown-button">
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div class="py-1">
                                                <a href="#"
                                                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Table Footer -->
                    <!-- <TableFooter /> -->
                    <!-- Table Footer -->
                </div>
                <!-- Invoice table -->
            </div>
        </section>
    </MainLayout>
</template>

<style scoped></style>