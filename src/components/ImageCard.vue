<template>
    <div class="rounded-md min-w-[200px] h-[240px] border-[2px] border-grey-200 flex flex-col items-center cursor-pointer"
        :class="isSelected ? 'border-[5px] border-primaryColor' : 'border-[2px] border-grey-200'">
        <span class="rounded-md my-2 w-[90%] text-center font-bold" :style="`border: solid 1.5px ${color}`">{{ title
            }}</span>
        <img class="w-full " :src="imageSrc" />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    imageSrc: {
        type: String,
        default: "/assets/image/crusher.png"
    },
    onClick: {
        type: Function,
        required: false
    },
    isSelected: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: '#11B886'
    }

})

</script>
