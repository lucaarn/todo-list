<script setup>
import { pendingTasks } from '../tasks.js'
import TaskList from '../components/TaskList.vue'

const tasks = pendingTasks
</script>

<template>
    <div>
        <h1 class="text-2xl mb-6">Pending Tasks</h1>
        <TaskList :tasks="tasks" />
    </div>
</template>

<style scoped></style>
