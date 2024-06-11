<template>
    <div :style="`width: ${width}; height: ${height}`"></div>
</template>

<script lang="ts" setup>
defineProps({
    width: {
        default: '0',
        type: String
    },
    height: {
        default: '0',
        type: String
    }
})
</script>