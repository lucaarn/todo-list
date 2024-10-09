<script setup>
import CatergorySelector from '../components/CatergorySelector.vue'
import { ref } from 'vue'
import { allTasks, taskData } from '../tasks.js'
import TaskList from '../components/TaskList.vue'

const newTask = ref()
const selectedCategory = ref()
const tasks = allTasks

const addTask = () => {
    if (newTask.value && selectedCategory.value) {
        taskData.tasks.push({
            id: Date.now(),
            title: newTask.value,
            category: selectedCategory.value,
            completed: false,
        })
        newTask.value = ''
        selectedCategory.value = ''
    }
}
</script>

<template>
    <h1 class="text-2xl mb-6">All Tasks</h1>

    <input v-model="newTask" placeholder="New Task" class="border p-2 mb-4" />
    <CatergorySelector v-model="selectedCategory" />
    <button class="bg-green-500 text-white px-4 py-2 rounded" @click="addTask">
        Add Task
    </button>
    <TaskList :tasks="tasks" />
</template>

<style scoped></style>
