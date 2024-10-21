<template>
    <VDatePicker v-model="date" color="indigo" mode="dateTime" :time-accuracy="1" hide-time-header />
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