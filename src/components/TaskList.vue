<script setup>
import TaskItem from './TaskItem.vue'
import { taskData } from '../tasks.js'

defineProps(['tasks'])

const deleteTask = (id) => {
    taskData.tasks = taskData.tasks.filter((task) => task.id !== id)
}
</script>

<template>
    <div>
        <h2 class="text-xl mb-4">Task List</h2>
        <div v-for="task in tasks" :key="task.id">
            <TaskItem :task="task" :onDelete="deleteTask" />
        </div>
    </div>
</template>

<style scoped></style>
