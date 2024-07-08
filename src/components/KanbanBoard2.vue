<template>
    <div style="box-shadow: 0px 2px 5px -1px rgba(107, 114, 128, 0.03), 0px 4px 10px 0px rgba(107, 114, 128, 0.04), 0px 1px 22px 0px rgba(107, 114, 128, 0.08);"
        :class="`w-[${width}] h-[${height}]`"
        class="flex flex-col  py-4 px-4 cursor-pointer rounded-[16px] hover:bg-gray-200">
        <div class="ml-auto">
            <button class="mr-2 text-primary font-semibold border-b-2 border-primary pb-1">week</button>
            <button>month</button>
        </div>
        <div class="bg-[#F0EDFD] w-[36px] h-[36px] rounded-md flex items-center justify-center">
            <img class="w-[24px] h-[24px]" :src="markImg" />
        </div>
        <div class="flex justify-between items-center mb-1">
            <div class="flex items-center">
                <span class="text-primary text-[1.3rem] mr-2 font-semibold">{{ amount }}</span>
                <span class="text-black text-[1.3rem] mr-2 font-semibold">{{ unitName }}</span>

                <!-- <div class="bg-[#6950e81a] text-[#6950E8] text-[12px] font-bold rounded-[16px] px-2 py-1">+12.5%</div> -->
            </div>


        </div>

        <span class="text-gray-500 text-sm mb-[50px]">{{ description }}</span>

        <span class="text-gray-600">
            <div>
                <span class="text-sm">{{ description2 }}</span>
                <div class="flex items-center">
                    <span class="text-[1.3rem] text-[#FEBF06] font-semibold mr-2">{{ amount2 }}</span>
                    <span class="text-black text-[1.3rem] mr-2 font-semibold">{{ unitName }}</span>


                </div>
            </div>
        </span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    amount: String,
    unitName: {
        type: String,
        default: 'kwh'
    },
    amount2: String,
    description: String,
    description2: String,
    markImg: {
        type: String,
        default: "/vite.svg"
    },
    width: {
        type: String,
        default: '350px'
    },
    height: {
        type: String,
        default: '250px'
    },
    date: String
})

</script>
