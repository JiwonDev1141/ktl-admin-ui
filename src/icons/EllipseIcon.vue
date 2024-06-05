<template>
    <svg v-if="isSelected === false" width="4" height="4" viewBox="0 0 4 4" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="#6B7280" />
    </svg>
    <svg v-if="isSelected === true" width="4" height="4" viewBox="0 0 4 4" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="#6950E8" />
        <circle cx="2" cy="2" r="2" stroke="#9747FF" stroke-opacity="0.1" stroke-width="1.5" />
    </svg>
</template>

<script lang="ts" setup>
defineProps({
    isSelected: {
        type: Boolean,
        default: false
    }
})


</script>