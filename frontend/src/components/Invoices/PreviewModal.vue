<script setup lang="ts">
import { ref, inject } from 'vue'


const previewModalOpen = ref(inject<boolean>('previewModalOpen'))

const toggleModal = () => {
  previewModalOpen.value = !previewModalOpen.value
}

</script>

<template>
  <!-- TODO: Global olarak kullanilip icerigi dinamik hale getirilebilir -->
  <!-- TODO: Component yapilacak veya duruma gore kaldirilacak -->
  <div id="readProductModal" tabindex="-1" aria-hidden="true" :class="{ 'hidden': previewModalOpen, 'backdrop-opacity-20 backdrop-invert h-full': !previewModalOpen }"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center flex items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-xl max-h-full">
      <!-- Modal content -->
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <!-- Modal header -->
        <div class="flex justify-between mb-4 rounded-t sm:mb-5">
          <div class="text-lg text-gray-900 md:text-xl dark:text-white">
            <h3 class="font-semibold ">#INV-46807556”</h3>
            <p class="font-bold">John Doe</p>
          </div>
          <div>
            <button type="button" @click="toggleModal()"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="readProductModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
        </div>
        <dl>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Durum</dt>
          <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">            
              <!-- TODO: class aktif olup olmamasina gore degisecek -->
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Aktif</span>
            </dd>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Ödeme</dt>
            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              Doğrudan banka transferi
          </dd>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Tarih</dt>
            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">              
              25 Mart, 12:55
          </dd>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Toplam Fiyat</dt>
            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">             
              $2999
          </dd>
        </dl>
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3 sm:space-x-4">
            <button type="button"
              class="text-white inline-flex items-center bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd" />
              </svg>
              Düzenle
            </button>
            <button type="button"
              class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Detay
            </button>
          </div>
        <button type="button"
          class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
          <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd" />
          </svg>
          Sil
        </button>
      </div>
    </div>
  </div>
</div></template>

<style scoped></style>