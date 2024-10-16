<script setup>
import CategorySelector from '../components/CategorySelector.vue'
import { ref } from 'vue'
import { allTasks, taskData } from '../tasks.js'
import TaskList from '../components/TaskList.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const newTask = ref()
const selectedCategory = ref()
const date = ref(new Date())
const tasks = allTasks

const addTask = () => {
    if (newTask.value && selectedCategory.value) {
        taskData.tasks.push({
            id: crypto.randomUUID(),
            title: newTask.value,
            category: selectedCategory.value,
            dueDate: date.value,
            completed: false,
        })
        newTask.value = ''
        selectedCategory.value = ''
    }
}
</script>

<template>
    <h1 class="text-2xl mb-6">All Tasks</h1>

    <div class="flex space-x-1 h-10">
        <input
            v-model="newTask"
            placeholder="New Task"
            class="border p-2 mb-4 h-full"
        />
        <CategorySelector v-model="selectedCategory" class="h-full" />
        <div class="w-52">
            <VueDatePicker
                v-model="date"
                :enable-time-picker="false"
                class="h-full"
            />
        </div>
        <button
            class="bg-green-500 text-white px-4 py-2 rounded h-full"
            @click="addTask"
        >
            Add Task
        </button>
    </div>
    <TaskList :tasks="tasks" />
</template>

<style scoped></style>
