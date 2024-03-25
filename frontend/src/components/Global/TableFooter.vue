<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

// const router = useRouter()

const fetchData: any = inject('fetchData')

interface Pagination {
  prevPage: () => void
  nextPage: () => void
}

const pagination = inject<Pagination>('pagination') || { nextPage: () => {}, prevPage: () => {} }

const pageNumber = defineModel<number>('pageNumber', { required: true })
const maxPageCount = defineModel<number>('maxPageCount', { required: true })
const totalProductCount = defineModel('totalProductCount', { required: true })


const goToPage = (page: number, skip: number): void => {
    fetchData(skip)
    pageNumber.value = page
    // router.push({ path: '/products', query: { limit: 20, skip: (page - 1) * 20 } })
}

const props = defineProps<{    
    maxId: number,
    minId: number,
  }>()

</script>

<template>

    <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
        aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">{{ totalProductCount }}</span>
            üründen
            <span class="font-semibold text-gray-900 dark:text-white">{{ props.minId }}-{{ props.maxId }}</span>
            arası gösteriliyor
        </span>
        <ul class="inline-flex items-stretch -space-x-px">
            <li>
                <a href="#"
                v-if="pageNumber !== 1"
                @click="pagination.prevPage"
                    class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </li>
            <li v-for="(page, index) in maxPageCount" :key="index">
                <a href="#"
                @click="goToPage(page, (page - 1) * 20)"
                    :class="{'bg-white': page !== pageNumber, 'bg-gray-300 font-bold': page === pageNumber}"
                    class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {{ page }}    
                </a>
            </li>
            <li>
                <a href="#"
                v-if="pageNumber < maxPageCount"
                @click="pagination.nextPage"
                    class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </li>
        </ul>
    </nav>

</template>

<style scoped></style>