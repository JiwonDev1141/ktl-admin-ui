<template>
    <div 
    style="display: flex; background-color: white; position: relative; top: 10px;"
    :style="`width: ${width}; height: 3rem;`"

    class="flex justify-between border-solid border-2 
        border-gray-200 py-3 px-[25px] cursor-pointer rounded-[16px] hover:bg-gray-200">
        <span class="text-[0.9rem] font-bold">
            {{ text }}
        </span>
        <button @click="setShow(false)">
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
    text: String,
    setShow: Function
})

</script>
<style scoped>

</style>
