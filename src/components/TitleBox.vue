<template>
    <div :style="`width: ${width}; height: 3rem;`" class="flex flex-col border-solid border-2 
        border-gray-200 py-3 my-2 pl-[25px] cursor-pointer rounded-[16px] hover:bg-gray-200
        font-semibold text-[0.9rem]
        ">
        {{ text }}
    </div>
</template>

<script lang="ts" setup>
defineProps({
    width: {
        type: String,
        defaultValue: '300px'
    },
    text: String
})

</script>
