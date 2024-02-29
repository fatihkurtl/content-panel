
<script setup lang="ts">
import MainLayout from '@/layouts/admin/MainLayout.vue'
console.log('.env variable =>', import.meta.env.VITE_APP_NAME)


</script>

<template>
   <MainLayout>
      <section class="bg-mainBgColor dark:bg-gray-900 rounded-lg">
         <div class="min-w-full bg-mainBgColor">
            <div class="bg-white rounded-lg dark:bg-gray-800 md:pl-70 mx-4 shadow-md sm:rounded-lg overflow-hidden">
               <div
                  class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                  <main class="overflow-x-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <!-- Total Product Count -->
                        <div
                           class="max-w-md min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between items-center">
                           <div>
                              <span class="bottom-0 right-0 text-red-500 mr-6 mb-2">-8.5%</span>
                              <p class="text-2xl font-bold text-gray-900">450</p>
                              <p class="text-gray-700">Toplam Ürünler</p>
                           </div>
                           <div>
                              <svg class="w-12 h-12 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.6 8.4h0m-4.7 11.3-6.6-6.6a1 1 0 0 1 0-1.4l7.3-7.4a1 1 0 0 1 .7-.3H18a2 2 0 0 1 2 2v5.5a1 1 0 0 1-.3.7l-7.5 7.5a1 1 0 0 1-1.3 0Z" />
                              </svg>
                           </div>
                        </div>
                        <!-- Total Product Count -->
                        <!-- Total Sales -->
                        <div
                           class="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between items-center">
                           <div>
                              <span class="bottom-0 right-0 text-green-500 mr-6 mb-2">+3.5%</span>
                              <p class="text-2xl font-bold text-gray-900 items-center">
                                 <span class="material-symbols-outlined">
                                    currency_lira
                                 </span>
                                 188.670,46
                              </p>
                              <p class="text-gray-700">Toplam Ciro</p>
                           </div>
                           <div>
                              <svg class="w-12 h-12 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                              </svg>
                           </div>
                        </div>
                        <!-- Total Sales -->
                        <!-- Total Customers -->
                        <div
                           class="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between items-center">
                           <div>
                              <span class="bottom-0 right-0 text-green-500 mr-6 mb-2">+3.5%</span>
                              <p class="text-2xl font-bold text-gray-900 items-center">
                                 258
                              </p>
                              <p class="text-gray-700">Toplam Müşteriler</p>
                           </div>
                           <div>
                              <svg class="w-12 h-12 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                              </svg>
                           </div>
                        </div>
                        <!-- Total Customers -->
                        <!-- Total Orders -->
                        <div
                           class="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between items-center">
                           <div>
                              <span class="bottom-0 right-0 text-green-500 mr-6 mb-2">+3.5%</span>
                              <p class="text-2xl font-bold text-gray-900 items-center">
                                 258
                              </p>
                              <p class="text-gray-700">Toplam Siparişler</p>
                           </div>
                           <div>
                              <svg class="w-12 h-12 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3" />
                              </svg>
                           </div>
                        </div>
                        <!-- Total Orders -->
                     </div>
                     <!-- Top Selling Products -->
                     <div class="py-4">
                     <h1 class="py-2 text-xl font-semibold">En Çok Satılan Ürünler</h1>
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                           <div
                              class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                              <div>
                                 <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                                    class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button">
                                    <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                       <path
                                          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                    </svg>
                                    Last 30 days
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                       fill="none" viewBox="0 0 10 6">
                                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                 </button>
                                 <!-- Dropdown menu -->
                                 <div id="dropdownRadio"
                                    class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                    data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                                    style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                                    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                                       aria-labelledby="dropdownRadioButton">
                                       <li>
                                          <div
                                             class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                             <input id="filter-radio-example-1" type="radio" value="" name="filter-radio"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                             <label for="filter-radio-example-1"
                                                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                                day</label>
                                          </div>
                                       </li>
                                       <li>
                                          <div
                                             class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                             <input id="filter-radio-example-2" type="radio" value="" name="filter-radio"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                             <label for="filter-radio-example-2"
                                                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                                7 days</label>
                                          </div>
                                       </li>
                                       <li>
                                          <div
                                             class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                             <input id="filter-radio-example-3" type="radio" value="" name="filter-radio"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                             <label for="filter-radio-example-3"
                                                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                                30 days</label>
                                          </div>
                                       </li>
                                       <li>
                                          <div
                                             class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                             <input id="filter-radio-example-4" type="radio" value="" name="filter-radio"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                             <label for="filter-radio-example-4"
                                                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                                month</label>
                                          </div>
                                       </li>
                                       <li>
                                          <div
                                             class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                             <input id="filter-radio-example-5" type="radio" value="" name="filter-radio"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                             <label for="filter-radio-example-5"
                                                class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                                year</label>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <label for="table-search" class="sr-only">Search</label>
                              <div class="relative">
                                 <div
                                    class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"></path>
                                    </svg>
                                 </div>
                                 <input type="text" id="table-search"
                                    class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for items">
                              </div>
                           </div>
                           <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead
                                 class="text-sm text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                 <tr>
                                    <th scope="col" class="p-4">
                                       <div class="flex items-center">
                                          <input id="checkbox-all-search" type="checkbox"
                                             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                       </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Ürün
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Satıldı
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Gelir
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Action
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                       <div class="flex items-center">
                                          <input id="checkbox-table-search-1" type="checkbox"
                                             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                          <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                       </div>
                                    </td>
                                    <th scope="row"
                                       class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                       Silver
                                    </td>
                                    <td class="px-6 py-4">
                                       Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                       $2999
                                    </td>
                                    <td class="px-6 py-4">
                                       <a href="#"
                                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                 </tr>
                                 <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                       <div class="flex items-center">
                                          <input id="checkbox-table-search-2" type="checkbox"
                                             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                          <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                       </div>
                                    </td>
                                    <th scope="row"
                                       class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                       White
                                    </td>
                                    <td class="px-6 py-4">
                                       Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                       $1999
                                    </td>
                                    <td class="px-6 py-4">
                                       <a href="#"
                                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                 </tr>
                                 <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                       <div class="flex items-center">
                                          <input id="checkbox-table-search-3" type="checkbox"
                                             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                          <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                       </div>
                                    </td>
                                    <th scope="row"
                                       class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                       Black
                                    </td>
                                    <td class="px-6 py-4">
                                       Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                       $99
                                    </td>
                                    <td class="px-6 py-4">
                                       <a href="#"
                                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                 </tr>
                                 <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                       <div class="flex items-center">
                                          <input id="checkbox-table-3" type="checkbox"
                                             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                          <label for="checkbox-table-3" class="sr-only">checkbox</label>
                                       </div>
                                    </td>
                                    <th scope="row"
                                       class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Apple Watch
                                    </th>
                                    <td class="px-6 py-4">
                                       Silver
                                    </td>
                                    <td class="px-6 py-4">
                                       Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                       $179
                                    </td>
                                    <td class="px-6 py-4">
                                       <a href="#"
                                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                 </tr>
                                 <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                       <div class="flex items-center">
                                          <input id="checkbox-table-3" type="checkbox"
                                             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                          <label for="checkbox-table-3" class="sr-only">checkbox</label>
                                       </div>
                                    </td>
                                    <th scope="row"
                                       class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       iPad
                                    </th>
                                    <td class="px-6 py-4">
                                       Gold
                                    </td>
                                    <td class="px-6 py-4">
                                       Tablet
                                    </td>
                                    <td class="px-6 py-4">
                                       $699
                                    </td>
                                    <td class="px-6 py-4">
                                       <a href="#"
                                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                 </tr>
                                 <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-4">
                                       <div class="flex items-center">
                                          <input id="checkbox-table-3" type="checkbox"
                                             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                          <label for="checkbox-table-3" class="sr-only">checkbox</label>
                                       </div>
                                    </td>
                                    <th scope="row"
                                       class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Apple iMac 27"
                                    </th>
                                    <td class="px-6 py-4">
                                       Silver
                                    </td>
                                    <td class="px-6 py-4">
                                       PC Desktop
                                    </td>
                                    <td class="px-6 py-4">
                                       $3999
                                    </td>
                                    <td class="px-6 py-4">
                                       <a href="#"
                                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <!-- Top Selling Products -->
                     <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                     </div>
                     <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
                     <div class="grid grid-cols-2 gap-4">
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
                        </div>
                     </div>
                  </main>

               </div>
            </div>
         </div>
      </section>
   </MainLayout>
</template>

<style scoped></style>
