<script setup>
const props = defineProps(['task', 'onDelete'])
const removeTask = () => {
    props.onDelete(props.task.id)
}
</script>

<template>
    <div
        class="flex justify-between items-center p-2 bg-white shadow mb-2 rounded"
    >
        <div :class="{ 'line-through': task.completed }">
            <input v-model="task.completed" type="checkbox" class="mr-2" />
            {{ task.title }} ({{ task.category }})
        </div>
        <button @click="removeTask" class="text-red-500">Delete</button>
    </div>
</template>

<style scoped></style>
