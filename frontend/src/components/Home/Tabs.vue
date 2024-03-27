<script setup lang="ts">
import { ref } from 'vue'
import ITab from '@/interfaces/home'

const tabs = ref<ITab[]>([
    {
        id: 'about',
        label: 'About',
        title: 'Powering innovation & trust at 200,000+ companies worldwide',
        content: 'Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.',
        selected: true,
    },
    {
        id: 'services',
        label: 'Services',
        title: 'We invest in the world’s potential',
        services: ['Dynamic reports and dashboards', 'Templates for everyone', 'Development workflow', 'Limitless business automation'],
        selected: false,
    },
    {
        id: 'statistics',
        label: 'Facts',
        title: '',
        stats: [
            { value: '73M+', label: 'Developers' },
            { value: '100M+', label: 'Public repositories' },
            { value: '1000s', label: 'Open source projects' },
        ],
        selected: false,
    },
])

const selectTab = (tab: ITab): void => {
    tabs.value.forEach((t) => (t.selected = t.id === tab.id))
}

</script>

<template>

    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                role="tablist">
                <li v-for="tab in tabs" :key="tab.id" class="me-2">
                    <button :id="tab.id + '-tab'" :data-tabs-target="'#' + tab.id" type="button" :aria-controls="tab.id"
                        :aria-selected="tab.selected" @click="selectTab(tab)"
                        :class="{ 'text-blue-600': tab.selected, 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300': !tab.selected }"
                        class="inline-block p-4 rounded-ss-lg">{{ tab.label }}</button>
                </li>
            </ul>
            <div id="defaultTabContent">
                <div v-for="tab in tabs" :key="tab.id" :id="tab.id"
                    :class="{ 'hidden': !tab.selected, 'p-4': true, 'bg-white': true, 'rounded-lg': true, 'md:p-8': true, 'dark:bg-gray-800': true }"
                    role="tabpanel" :aria-labelledby="tab.id + '-tab'">
                    <div v-if="tab.id === 'about'">
                        <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{
                    tab.title }}</h2>
                        <p class="mb-3 text-gray-500 dark:text-gray-400">{{ tab.content }}</p>
                        <a href="#"
                            class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">Learn
                            more
                            <svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </div>
                    <div v-else-if="tab.id === 'services'">
                        <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{
                    tab.title }}</h2>
                        <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                            <li v-for="(service, index) in tab.services" :key="index"
                                class="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="leading-tight">{{ service }}</span>
                            </li>
                        </ul>
                    </div>
                    <div v-else-if="tab.id === 'statistics'">
                        <dl
                            class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                            <div v-for="(stat, index) in tab.stats" :key="index" class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">{{ stat.value }}</dt>
                                <dd class="text-gray-500 dark:text-gray-400">{{ stat.label }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped></style>