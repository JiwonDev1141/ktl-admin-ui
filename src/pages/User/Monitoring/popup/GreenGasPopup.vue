<template>
    <PopupContainer v-show="show === true">
        
             
                <!-- 온실가스 저감 박스 start -->
                <TitleBox text="온실가스 저감" width="1145px" :setShow="setShow" />
                <div class="w-[1145px] flex justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3 bg-white">


                    <div class="w-2/3">
                        <div class="flex">
                            <div class="flex flex-col font-semibold w-[120px] p-2 border-2 rounded-md">
                                <span class="text-gray-500">CO2</span>
                                <span class="font-bold text-[18px] mb-2">12ppm</span>
                                <span class="text-[#11B886] text-[14px]">+12.5%</span>
                            </div>
                            <div class="flex flex-col font-semibold w-[120px] p-2 border-2 rounded-md">
                                <span class="text-gray-500">CH4</span>
                                <span class="font-bold text-[18px] mb-2">123ppm</span>
                                <span class="text-[#11B886] text-[14px]">+5.56%</span>
                            </div>
                            <div class="flex flex-col font-semibold w-[120px] p-2 border-2 rounded-md">
                                <span class="text-gray-500">N20</span>
                                <span class="font-bold text-[18px] mb-2">12ppm</span>
                                <span class="text-[#11B886] text-[14px]">-1.5%</span>
                            </div>
                            <div class="flex flex-col font-semibold w-[120px] p-2 border-2 rounded-md">
                                <span class="text-gray-500">HFCs</span>
                                <span class="font-bold text-[18px] mb-2">12ppm</span>
                                <span class="text-[#11B886] text-[14px]">-10.5%</span>
                            </div>
                            <div class="flex flex-col font-semibold w-[120px] p-2 border-2 rounded-md">
                                <span class="text-gray-500">PFCs</span>
                                <span class="font-bold text-[18px] mb-2">12ppm</span>
                                <span class="text-[#11B886] text-[14px]">-10.5%</span>
                            </div>

                        </div>

                        <div class="flex relative left-[80%]">
                            <button class="mr-3">day</button>
                            <button class="mr-3">week</button>
                            <button class="mr-3">month</button>
                        </div>

                        <GreenGasChart />

                    </div>
                    <div class="w-1/3 ">
                        <span class="text-gray-500 text-[20px] mr-2 pt-4 font-semibold">공정별 온실가스 배출량</span>
                        <div class="flex items-center h-full">
                            <GreenGasBarChart />
                        </div>
                    </div>

                </div>
                <!-- 온실가스 저감 박스 end -->
                </PopupContainer>

    </template>
    
    <script setup>
    import PopupContainer from "@/components/common/PopupContainer.vue"
    import GreenGasBarChart from "../charts/GreenGasBarChart.vue"
    import GreenGasChart from "../charts/GreenGasChart.vue"

    import TitleBox from "@/components/TitleBox.vue"
    
    defineProps({
        show: Boolean,
        setShow: Function,
    })
    
    </script>