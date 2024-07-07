<template>
<PopupContainer v-show="show === true">
         <!-- 수질오염 저감 박스 start -->
         <TitleBox class="z-10" text="수질오염 저감" width="540px" :setShow="setShow" />
                <div class="z-[999] w-[540px]  bg-white flex flex-col justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3">
                    <!--  -->
                    <div class="w-full flex">
                        <div class="flex w-1/2">
                            <div class="w-full">
                                <div class="flex items-center">
                                    <span class="text-gray-800 text-[24px] mr-2 font-semibold">51,352 T</span>
                                    <div
                                        class="bg-[#E7F8F3] text-[#11B886] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                        +12.5%</div>
                                </div>
                                <div class="">
                                    <span class="text-gray-400 text-[0.9rem]">용수사용량</span>
                                    <div class="flex justify-between">

                                        <WaterUsageChart />

                                        <div class="text-[0.9rem]">
                                            <div class="flex w-full">
                                                <img class="mr-2" src="/assets/icon/ellipse_1.svg" />
                                                <span class="w-[100px] text-gray-500">원료</span>
                                                <span class="font-semibold">2,658 T</span>
                                            </div>
                                            <div class="flex">
                                                <img class="mr-2" src="/assets/icon/ellipse_2.svg" />
                                                <span class="w-[100px] text-gray-500">냉각 용수</span>
                                                <span class="font-semibold">6,687 T</span>
                                            </div>
                                            <div class="flex">
                                                <img class="mr-2" src="/assets/icon/ellipse_3.svg" />
                                                <span class="w-[100px] text-gray-500">재활용 폐수</span>
                                                <span class="font-semibold">4,348 T</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->

                        <div class="flex items-between w-1/2 h-full">
                            <div class="w-full h-full pl-3 flex flex-col items-between">
                                <div class="mb-6">
                                    <div class="flex items-center">
                                        <span class="text-gray-800 text-[24px] mr-2 font-semibold">51,352 T</span>
                                        <div
                                            class="bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                            -2.65%</div>
                                    </div>
                                    <span class="text-gray-400 text-[0.9rem]">폐수 발생량</span>
                                </div>
                                <div>
                                    <div class="flex justify-between">

                                        <div class="flex justify-between w-full mb-2">
                                            <span class="font-bold text-[0.9rem]">재활용 폐수</span>
                                            <span class="text-[0.9rem] text-gray-500">75%</span>
                                        </div>

                                    </div>
                                    <ProgressBar barWidth="336" barColor="#11b886" backgroundColor="#c3ede1"
                                        :percentage="75" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="py-4">
                        <div class="flex items-center pb-4">
                            <span class="text-gray-800 text-[24px] mr-2 font-semibold">수질 정보</span>
                            <div class="ml-10 text-sm text-gray-500">
                                <span class="mr-10">BOD</span>
                                <span class="mr-10">COD</span>
                                <span class="mr-10">DO</span>

                            </div>
                            <div class="flex items-center ml-auto">
                                <span class="text-[#EF4770] font-semibold">수질 등급</span>
                                <span class="text-white text-[0.8rem] bg-[#A596F1] p-2 rounded-md ml-2">2 등급</span>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="px-[15%]">
                                <div class="flex">
                                    <span class="font-bold text-[18px] mr-2">10ppm</span>
                                    <div
                                        class="bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                        -3.25%</div>
                                </div>
                                <span class="text-gray-400 text-[14px]">전일 대비 수치</span>
                            </div>
                            <div class="flex">
                                <button class="mr-3">day</button>
                                <button class="mr-3">week</button>
                                <button class="mr-3">month</button>
                            </div>
                            <div>
                                <div class="flex">
                                    <img src="/assets/icon/radio_button_1.svg" class="mr-2" />
                                    <span>BOD</span>
                                </div>
                                <div class="flex">
                                    <img src="/assets/icon/radio_button_2.svg" class="mr-2" />
                                    <span>COD</span>
                                </div>
                                <div class="flex">
                                    <img src="/assets/icon/radio_button_3.svg" class="mr-2" />
                                    <span>DO</span>
                                </div>
                            </div>

                        </div>

                        <WaterInfoChart />

                    </div>

                </div>
                </PopupContainer>
                <!-- 수질오염 저감 박스 end -->
</template>

<script setup>
import PopupContainer from "@/components/common/PopupContainer.vue"
import WaterInfoChart from "../charts/WaterInfoChart.vue"
import TitleBox from "@/components/TitleBox.vue"

defineProps({
    show: Boolean,
    setShow: Function,
})

</script>