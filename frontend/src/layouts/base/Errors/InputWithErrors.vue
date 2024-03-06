<script setup lang="ts">

defineProps<{
    message: string
}>()

</script>

<template>

    <span class="block mb-2 text-xs font-medium text-red-600 dark:text-white">{{ message }}</span>

</template>

<style scoped></style>