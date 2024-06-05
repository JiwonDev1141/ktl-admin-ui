<template>
    <input class="w-full p-3 rounded-md border-solid border-2 border-gray-200 text-sm max-w-[400px]"
        :placeholder="placeholder" />
</template>

<script lang="ts" setup>
defineProps({
    placeholder: String,
})
</script>