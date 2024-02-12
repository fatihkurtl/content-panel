<script setup lang="ts">
import { ref } from 'vue'
import useProgressBar from '@/composables/progress/progress'

const { progress } = useProgressBar()

</script>

<template>
    <div v-if="progress > 0" class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 z-50">
        <div class="bg-blue-600 h-1 rounded-full" :style="{ 'width': progress + '%' }"></div>
        <div v-if="progress < 100" class="fixed inset-0 bg-black opacity-50 z-50"></div>
    </div>
</template>

<style scoped></style>