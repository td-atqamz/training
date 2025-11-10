<script setup>
defineProps({
    data: {
        type: Array,
        require: true
    },
    modelValue: {
        type: [String, Number],
    },
    id: {
        type: String,
        require: true
    }
});
</script>
<template>
    <select class="form-select" :id="id" @input="$emit('update:modelValue', $event.target.value)">
        <option v-for="(item, index) in data" :key="index" :value="item" :selected="modelValue === item">
            {{ item }}
        </option>
    </select>
</template>