<script setup lang="ts">
import { ref } from 'vue'
import { ProductFilterCategories } from '@/enums/products/enums'
import useProductDropdowns from '@/composables/products/product-dropdowns'
import productFilters from '@/composables/products/product-filters'

const { 
    selectedFilters
 } = productFilters()

const {
    productCategoryFilterOpen,
    productCategoryElement,
    toggleDropdown
} = useProductDropdowns()

</script>

<template>

    <div ref="productCategoryElement">
        <button @click="toggleDropdown('category')" id="filterDropdownButton" data-dropdown-toggle="filterDropdown"
            class="w-full md:w-auto flex items-center justify-center px-2 py-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400"
                viewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clip-rule="evenodd" />
            </svg>
            Kategori
            <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
        </button>
        <div id="filterDropdown" :class="{ 'hidden': !productCategoryFilterOpen }"
            class="absolute z-10 w-54 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="grid gap-4 sm:grid-cols-1 sm:gap-6 items-center">
                <div>
                    <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        Kategori seçin
                    </h6>
                    <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                        <li v-for="(category, index) in ProductFilterCategories" :key="index" class="flex items-center">
                            <input @click="selectedFilters(category, 'category')" :id="category + index" type="checkbox" :value="category"
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label :for="category + index"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                {{ category }}
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>