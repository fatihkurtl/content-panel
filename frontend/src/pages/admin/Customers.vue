<script setup lang="ts">
import MainLayout from '@/layouts/admin/MainLayout.vue'
import CustomerAction from '@/components/Customers/CustomerAction.vue'


</script>

<template>
   <MainLayout>

      <div class="min-w-full bg-mainBgColor">
         <div class="bg-white rounded-lg dark:bg-gray-800 md:pl-70 mx-4 shadow-md sm:rounded-lg overflow-hidden">
            <div
               class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">               
               <!-- Customer Action -->
               <CustomerAction />
               <!-- Customer Action -->
               <label for="table-search" class="sr-only">Search</label>
               <div class="relative mx-2 my-2">
                  <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                     </svg>
                  </div>
                  <input type="text" id="table-search-customers" data-table-search="customers"
                     class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Müşteri ara">
               </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead class="text-sm text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" class="p-4">
                        <div class="flex items-center">
                           <input id="checkbox-all-search" type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                           <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Müşteri
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Toplam Harcama (TL)
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Durum
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Eylemler
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
                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Neil Sims</div>
                           <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        React Developer
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <span
                              class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Ödeme işlemleri bitti</span>
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Faturayı gör</a>
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
                        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Bonnie Green</div>
                           <div class="font-normal text-gray-500">bonnie@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        Designer
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <span
                              class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                              Ödeme işlemleri devam ediyor
                           </span>
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Faturayı gör</a>
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
                        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Jese Leos</div>
                           <div class="font-normal text-gray-500">jese@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        Vue JS Developer
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
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
                        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Thomas Lean</div>
                           <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        UI/UX Engineer
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
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
                        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Thomas Lean</div>
                           <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        UI/UX Engineer
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                     </td>
                  </tr>
                  <!-- <tr
                     class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td class="w-4 p-4">
                        <div class="flex items-center">
                           <input id="checkbox-table-search-2" type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                           <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                        </div>
                     </td>
                     <th scope="row"
                        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Thomas Lean</div>
                           <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        UI/UX Engineer
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
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
                        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Thomas Lean</div>
                           <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        UI/UX Engineer
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                     </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td class="w-4 p-4">
                        <div class="flex items-center">
                           <input id="checkbox-table-search-3" type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                           <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                        </div>
                     </td>
                     <th scope="row"
                        class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="/src/assets/user.png" alt="Jese image">
                        <div class="ps-3">
                           <div class="text-base font-semibold">Leslie Livingston</div>
                           <div class="font-normal text-gray-500">leslie@flowbite.com</div>
                        </div>
                     </th>
                     <td class="px-6 py-4">
                        SEO Specialist
                     </td>
                     <td class="px-6 py-4">
                        <div class="flex items-center">
                           <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                        </div>
                     </td>
                     <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                     </td>
                  </tr> -->
               </tbody>
            </table>
         </div>
      </div>

   </MainLayout>
</template>

<style scoped></style>