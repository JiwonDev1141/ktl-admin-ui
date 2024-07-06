<template>
    <button class="text-white w-full bg-primary rounded-md text-[0.9rem] py-3 max-w-[400px]">{{ text }}</button>
</template>

<script lang="ts" setup>
defineProps({
    text: String,
})
</script>