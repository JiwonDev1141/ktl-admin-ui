<template>
    <VDatePicker v-model="date" color="indigo" mode="dateTime" />
</template>

<script setup>
import { ref } from 'vue';
const date = ref([
    {
        key: 'today',
        dot: true,
        dates: new Date(),
    },
]);
</script>