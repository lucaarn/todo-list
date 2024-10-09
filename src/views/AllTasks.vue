<script setup>
import CatergorySelector from '../components/CatergorySelector.vue'
</script>

<template>
    <h1 class="text-2xl mb-6">All Tasks</h1>

    <input v-model="newTask" placeholder="New Task" class="border p-2 mb-4" />
    <CatergorySelector />
    <button class="bg-green-500 text-white px-4 py-2 rounded">Add Task</button>
</template>

<style scoped></style>
