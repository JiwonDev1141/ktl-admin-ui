<template>
    <div v-if="description" style="display: flex; background-color: white; position: relative; top: 10px;"
        :style="`width: ${width}; height: 3rem;`" class="flex justify-between border-solid border-2 
        border-gray-200 py-3 px-[25px] cursor-pointer rounded-[16px] hover:bg-gray-200">
        <span class="text-[1.1rem] font-black">
            {{ title }}
        </span>
        <span class="text-[0.9rem]">
            {{ new Date() }}
        </span>
    </div>

    <div v-if="!description" style="display: flex; background-color: white; position: relative; top: 10px;"
        :style="`width: ${width}; height: 3rem;`" class="flex justify-center border-solid border-2 
        border-gray-200 py-3 px-[25px] cursor-pointer rounded-[16px] hover:bg-gray-200">
        <span class="text-[1.1rem] font-bold">
            {{ title }}
        </span>
    </div>

</template>

<script lang="ts" setup>
defineProps({
    width: {
        type: String,
        defaultValue: '300px'
    },
    title: String,
    description: String,
    setShow: Function
})


</script>
<style scoped></style>
