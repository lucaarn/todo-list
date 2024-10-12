<script setup>
import { completedTasks } from '../tasks.js'
import TaskList from '../components/TaskList.vue'

const tasks = completedTasks
</script>

<template>
    <div>
        <h1 class="text-2xl mb-6">Completed Tasks</h1>
        <TaskList :tasks="tasks" />
    </div>
</template>

<style scoped></style>
