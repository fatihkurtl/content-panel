<script setup lang="ts">
import Header from '../base/Header.vue'
import Navbar from '../base/Navbar.vue'
import Sidebar from '../base/Sidebar/Sidebar.vue'
import Footer from '../base/Footer.vue'

</script>

<template>
    <div class="bg-mainBgColor w-screen">
        <!-- Breadcrumb -->
        <Header />
        <!-- Breadcrumb -->
        <Navbar />
        <Sidebar />
        <div class="bg-mainBgColor mt-8 md:mt-0 lg:mt-0 md:ml-64"> 
            <slot />
            <Footer />
        </div>
    </div>
</template>

<style scoped></style>