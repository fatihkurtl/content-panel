<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CustomersTimeChartFilters } from '@/enums/home/enum'
import useHomeDropdowns from '@/composables/home/home-dropdowns'

const {
    customerChartFilterOpen,
    customerChartElement,
    toggleDropdown
} = useHomeDropdowns()

const chartSelectedTimePeriod = ref<string>('')

const options = ref({
    chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
    },
    dataLabels: {
        enabled: true,
    },
    stroke: {
        width: 6,
    },
    grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
            left: 2,
            right: 2,
            top: 0
        },
    },
    series: [
        {
            name: "Yeni müşteriler",
            data: [16, 27, 35, 29, 32, 48],
            color: "#1A56DB",
        },
    ],
    xaxis: {
        categories: ['01 Şubat', '02 Şubat', '03 Şubat', '04 Şubat', '05 Şubat', '06 Şubat', '07 Şubat'],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        max: 48 // TODO: Toplam musteri sayisi olacak
    },
});

onMounted(() => {
    const chart = new ApexCharts(document.getElementById("area-chart"), options.value);
    chart.render()
})
</script>

<template>

    <div class="min-w-sm w-full min-h-full border bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div class="flex justify-between">
            <div>
                <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                    58
                </h5>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Bu haftaki müşteriler
                </p>
            </div>
            <div
                class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                3.5%
                <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 13V1m0 0L1 5m4-4 4 4" />
                </svg>
            </div>
        </div>
        <div id="area-chart" class="min-w-full"></div>
        <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
            <div ref="customerChartElement" class="flex justify-between items-center pt-5">
                <!-- Button -->
                <button @click="toggleDropdown('customerChartFilter')" id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom"
                    class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                    type="button">
                    {{ chartSelectedTimePeriod === '' ? 'Zaman Aralığı' : chartSelectedTimePeriod }}
                    <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="lastDaysdropdown" :class="{ 'hidden': !customerChartFilterOpen }"
                    class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li @click="customerChartFilterOpen = false"
                            v-for="(timeRange, index) in CustomersTimeChartFilters" :key="index">
                            <a @click="chartSelectedTimePeriod = timeRange"
                                class="block px-4 py-2 mx-2 my-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {{ timeRange }}
                            </a>
                        </li>
                    </ul>
                </div>
                <RouterLink to="/customers"
                    class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                    Müşteri Raporu
                    <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                </RouterLink>
            </div>
        </div>
    </div>

</template>

<style scoped></style>