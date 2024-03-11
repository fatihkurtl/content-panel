<script setup lang="ts">
import { ref, onMounted, computed, provide } from 'vue'
import { RouterLink } from 'vue-router'
import { ProductsTableHeader } from '@/enums/products/enums'
import MainLayout from '@/layouts/admin/MainLayout.vue'
import CategoryFilter from '@/components/Product/CategoryFilter.vue'
import BrandFilter from '@/components/Product/BrandFilter.vue'
import StockStatusFilter from '@/components/Product/StockStatusFilter.vue'
import TableFooter from '@/components/Global/TableFooter.vue'
import ApiService from '@/services/apiServices'

const apiService = new ApiService()

const productData = ref<any>()
const filledStars = computed(() => Math.round(productData.value.rating))

const limit = ref<number>(20)
const page = ref<number>(1)
const totalProducts = ref<number>(0)
const maxPage = ref<number>(0)

const calculateMaxPage = (): number => {
    return Math.ceil(totalProducts.value / limit.value)
}

const fetchData = async () => {
    try {
        const response = await apiService.getAll(limit.value, (page.value - 1) * limit.value)
        console.log((page.value - 1) * limit.value);
        productData.value = response.data.products
        totalProducts.value = response.data.total
        maxPage.value = calculateMaxPage()
        console.log(productData.value)
    } catch (error: any) {
        throw new Error(error)
    }
}

const prevPage = (): void => {
    if (page.value > 1) {
        page.value--
        fetchData()
    }
}

const nextPage = (): void => {
    if (page.value < maxPage.value) {
        page.value++
        fetchData()
    }
}

onMounted(() => {
    fetchData()
    maxPage.value = calculateMaxPage()
})

provide('pagination', { prevPage, nextPage })

</script>

<template>
    <MainLayout>
        <section class="bg-mainBgColor dark:bg-gray-900 rounded-lg">
            <div class="min-w-full bg-mainBgColor">
                <div class="bg-white rounded-lg dark:bg-gray-800 md:pl-70 mx-4 shadow-md sm:rounded-lg overflow-hidden">
                    <div
                        class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div class="flex items-center flex-1 space-x-4">
                            <h5>
                                <span class="text-gray-500">Tüm Ürünler:</span>
                                <span class="dark:text-white">123456</span>
                            </h5>
                            <h5>
                                <span class="text-gray-500">Toplam satış:</span>
                                <span class="dark:text-white">$88.4k</span>
                            </h5>
                        </div>
                        <div
                            class="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                            <RouterLink to="/product-add" type="button"
                                class="flex items-center justify-center px-2 py-1 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                <span class="material-symbols-outlined h-6 w-6 mr-2">
                                    add
                                </span>
                                Yeni ürün ekle
                            </RouterLink>

                            <button type="button"
                                class="flex items-center justify-center flex-shrink-0 px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <span class="material-symbols-outlined w-6 h-6 mr-2">
                                    cached
                                </span>
                                Stokları güncelle 1/250
                            </button>
                            <button type="button"
                                class="flex items-center justify-center flex-shrink-0 px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <span class="material-symbols-outlined w-6 h-6 mr-2">
                                    export_notes
                                </span>
                                Excel'e aktar
                            </button>
                            <div
                                class="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                                <!-- Categories -->
                                <!-- TODO: Categories backend'den gelecek -->
                                <CategoryFilter />
                                <!-- Categories -->
                                <!-- TODO: Brands backend'den gelecek -->
                                <BrandFilter />
                                <!-- Stock & Status -->
                                <!-- TODO: Stoklari 0'dan buyuk olanlari da icerecek backend'den gelecek -->
                                <StockStatusFilter />
                                <!-- Stock & Status -->
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-sm text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-all" type="checkbox"
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-all" class="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th v-for="(header, index) in ProductsTableHeader" :key="index" scope="col"
                                        class="px-4 py-3">
                                        {{ header }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in productData" :key="product.id"
                                    class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="w-4 px-4 py-3">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox"
                                                onclick="event.stopPropagation()"
                                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row"
                                        class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img :src="product.thumbnail" alt="iMac Front Image" class="w-8 h-8 mr-3">
                                        {{ product.title }}&#34;
                                    </th>
                                    <td class="px-4 py-2">
                                        <span
                                            class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                            {{ product.category }}
                                        </span>
                                    </td>
                                    <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="flex items-center">
                                            <div :class="{ 'bg-green-700': product.stock >= 100, 'bg-red-700': product.stock < 100 }"
                                                class="inline-block w-4 h-4 mr-2 rounded-full"></div>
                                            {{ product.stock }}
                                        </div>
                                    </td>
                                    <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        1.47
                                    </td>
                                    <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        0.47
                                    </td>
                                    <td class="px-4 py-2 font-medium whitespace-nowrap dark:text-white">
                                        <div class="flex items-center">
                                            <svg v-for="star in 5" aria-hidden="true"
                                                :class="{ 'text-yellow-400': star <= product.rating, 'text-gray-300': star > filledStars }"
                                                class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span class="ml-1 text-gray-500 dark:text-gray-400">
                                                {{ product.rating }}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"
                                                fill="currentColor" class="w-5 h-5 mr-2 text-gray-400"
                                                aria-hidden="true">
                                                <path
                                                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                            </svg>
                                            1.6M
                                        </div>
                                    </td>
                                    <td class="px-4 py-2">$3.2M</td>
                                    <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Just now
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Table Footer -->
                    <TableFooter v-model:pageNumber="page" v-model:maxPageCount="maxPage" v-model:totalProductCount="totalProducts" />
                    <!-- Table Footer -->
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<style scoped></style>