<script setup>
import TaskItem from './TaskItem.vue'

defineProps(['tasks'])
</script>

<template>
    <div>
        <h2 class="text-xl mb-4">Task List</h2>
        <div v-for="task in tasks" :key="task.id">
            <TaskItem :task="task" />
        </div>
    </div>
</template>

<style scoped></style>
