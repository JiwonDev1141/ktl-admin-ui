<template>
    <div :style="`width: ${width}; height: 3rem;`" class="flex justify-between border-solid border-2 
        border-gray-200 py-3 px-[25px] cursor-pointer rounded-[16px] hover:bg-gray-200
    
        ">
        <span class="text-[0.9rem]">
            {{ text }}
        </span>
        <button @click="">
            <img src="/assets/icon/close.svg" />
        </button>
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
