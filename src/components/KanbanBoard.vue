<template>
    <div style="box-shadow: 0px 2px 5px -1px rgba(107, 114, 128, 0.03), 0px 4px 10px 0px rgba(107, 114, 128, 0.04), 0px 1px 22px 0px rgba(107, 114, 128, 0.08);"
        :class="`w-[${width}] h-[${height}]`"
    class="flex flex-col  py-4 px-4 cursor-pointer rounded-[16px] hover:bg-gray-200">
        <div class="flex justify-between items-center mb-1">
            <div class="flex items-center">
                <span class="text-gray-800 text-[32px] mr-2 font-semibold">{{ title }}</span>
                <!-- <div class="bg-[#6950e81a] text-[#6950E8] text-[12px] font-bold rounded-[16px] px-2 py-1">+12.5%</div> -->
            </div>


            <img :src="markImg" />
        </div>

        <span class="text-gray-500 text-sm mb-auto">{{ description }}</span>

        <span class="text-gray-600">
            <div>
                <span class="text-sm">전일대비 사용량</span>
                <div class="flex justify-between items-center">
                    <span class="text-[32px] font-semibold">+ 123</span>
                    <div class="bg-[#ef47701a] text-[#EF4770] font-bold rounded-[16px] px-4 py-2 text-[12px]">+12.5%
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    description: String,
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
