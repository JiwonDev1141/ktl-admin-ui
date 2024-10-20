<template>
    <div class="rounded-md min-w-[260px] border-[2px] border-grey-200 flex flex-col items-center cursor-pointer mx-2"
        :class="isSelected ? 'border-[5px] border-primaryColor' : 'border-[2px] border-grey-200'">
        <span class="rounded-md my-1 w-[90%] text-center font-bold" :style="`border: solid 1.5px ${color}`">{{ title
            }}</span>
        <img class="w-full " :src="imageSrc" />

        <div class="w-full flex flex-col justify-center items-center my-3">
            <span class="">센서 구성</span>
            <ul class="flex flex-col justify-start w-full p-3 text-[0.8rem]">
                <li v-for="(sensorName, index) in sensorList" :key="index" class="flex items-center my-3">
                    <svg class="mr-2" width="5" height="5" viewBox="0 0 5 5" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.6665" cy="3" r="3" fill="#111827" />
                    </svg>

                    <span>{{ sensorName }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    imageSrc: {
        type: String,
        default: "/assets/image/crusher.png"
    },
    sensorList: {
        type: Array,
        default: ['전력량계', '메인모터(Crusher Speed)', '서브모터(Feeder Speed)']
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
