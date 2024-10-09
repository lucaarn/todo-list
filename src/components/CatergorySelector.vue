<script setup>
defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})
const emit = defineEmits(['update:modelValue'])

const updateCategory = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <select :value="modelValue" class="border p-2" @input="updateCategory">
        <option disabled value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
    </select>
</template>

<style scoped></style>
