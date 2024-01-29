<template>
    <div class="flex flex-col border-solid border-2 border-gray-200 w-60 p-2 cursor-pointer rounded-md hover:bg-gray-200">
        <span class="text-gray-800 text-lg mb-2">{{ title }}</span>
        <span class="text-gray-400 text-sm mb-3">{{ description }}</span>
        <span class="text-gray-600 text-md">
            {{ date }}
        </span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    description: String,
    date: String
})

</script>
