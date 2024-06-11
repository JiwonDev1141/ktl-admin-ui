<template>
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
        <em>Code Preview</em>
        <textarea class='w-full h-full px-10 py-4 bg-gray-800 text-green-400 rounded-md'>{{ sourceCode }}</textarea>
    </div>
</template>

<script setup>

defineProps({
    sourceCode: String
})

</script>