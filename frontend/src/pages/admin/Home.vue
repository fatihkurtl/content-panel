
<script setup lang="ts">
import MainLayout from '@/layouts/admin/MainLayout.vue'
console.log('.env variable =>', import.meta.env.VITE_APP_NAME)


</script>

<template>
   <MainLayout>
      <h1>Home page</h1>
      <section class="bg-mainBgColor dark:bg-gray-900 rounded-lg">
         <div class="min-w-full bg-mainBgColor">
            <div class="bg-white rounded-lg dark:bg-gray-800 md:pl-70 mx-4 shadow-md sm:rounded-lg overflow-hidden">
               <div
                  class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                  <main class="overflow-x-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64">
                           <!-- Total Product Count -->
                           <!-- <div
                              class="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                 Total Products
                              </h5>
                              <p class="font-normal text-gray-700 dark:text-gray-400">
                                 You have <span class="font-bold text-gray-900">XX</span> products in your inventory.
                              </p>
                           </div> -->
                           <div
                              class="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between items-center">
                              <div>
                                 <p class="text-2xl font-bold text-gray-900">450</p>
                                 <p class="text-gray-700">Toplam ürün sayısı</p>
                              </div>
                              <div>
                                 <svg class="w-12 h-12 text-green-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M15.6 8.4h0m-4.7 11.3-6.6-6.6a1 1 0 0 1 0-1.4l7.3-7.4a1 1 0 0 1 .7-.3H18a2 2 0 0 1 2 2v5.5a1 1 0 0 1-.3.7l-7.5 7.5a1 1 0 0 1-1.3 0Z" />
                                 </svg>
                              </div>
                           </div>
                           <!-- Total Product Count -->
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
                           <!-- Total Sales -->
                           <div
                              class="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between items-center">
                              <div>
                                 <p class="text-2xl font-bold text-gray-900 items-center">
                                    <span class="material-symbols-outlined">
                                       currency_lira
                                    </span>
                                    188.670,46
                                 </p>
                                 <p class="text-gray-700">Toplam ciro</p>
                              </div>
                              <div>
                                 <svg class="w-12 h-12 text-green-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                       d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                 </svg>
                              </div>
                           </div>
                           <!-- Total Sales -->
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
                           <!-- Customers -->
                           <div
                              class="max-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow p-6 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between items-center">
                              <div>
                                 <p class="text-2xl font-bold text-gray-900 items-center">
                                    258
                                 </p>
                                 <p class="text-gray-700">Toplam müşteri</p>
                              </div>
                              <div>
                                 <svg class="w-12 h-12 text-green-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                       d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                 </svg>
                              </div>
                           </div>
                           <!-- Customers -->
                        </div>
                        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64">
                        </div>
                     </div>
                     <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
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
