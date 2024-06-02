<template>
    <input class="w-full p-3 rounded-md border-solid border-2 border-gray-200 text-sm" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
defineProps({
    placeholder: String,
})
</script>