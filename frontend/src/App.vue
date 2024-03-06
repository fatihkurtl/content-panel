<script setup lang="ts">
import { RouterView } from 'vue-router'
// import Navbar from './layouts/base/Navbar.vue'
// import Sidebar from './layouts/base/Sidebar/Sidebar.vue'
import ApiService from '@/services/apiServices'

const apiService = new ApiService()

console.log(apiService.get())

</script>

<template>
    <!-- <Navbar />
    <Sidebar /> -->
    <div class="bg-mainBgColor">
        <RouterView />
    </div>
</template>

<style scoped></style>
