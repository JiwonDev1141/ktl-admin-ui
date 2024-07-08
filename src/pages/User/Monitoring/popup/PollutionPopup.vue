<template>
    <PopupContainer v-show="show === true">



        <!-- 대기오염 저감 박스 start -->
        <TitleBox text="대기오염 저감" width="1145px" :setShow="setShow" />
        <div class="w-[1145px] flex justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3 bg-white">


            <div class="w-1/3">

                <div class="bg-gray-100 rounded-lg pb-4 pr-1 mr-4">
                    <div class="flex items-center px-2 py-2 ">
                        <span class="mr-2">대기상태</span>
                        <span class="text-gray-500 text-[0.8rem]">2024-01-01 01:00:00 기준</span>
                        <img class="ml-auto" src="/assets/icon/warning_circle.svg" />
                    </div>

                    <div class="bg-white rounded-lg text-[0.9rem]">
                        <div class="flex flex-col px-2 py-3">
                            <span>대기농도</span>
                            <span class="font-semibold">123,123</span>

                        </div>
                        <div class="flex justify-center text-[0.8rem] mb-[10%] shadow-lg">
                            <div class="flex flex-col items-center mr-2">

                                <span>좋음</span>
                                <span class="mb-2">
                                    (0~16)</span>
                                <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="primary"
                                    backgroundColor="primary" />
                                <img class="w-[1.5rem]" src="/assets/icon/fi-rr-smile.svg" />
                            </div>
                            <div class="flex flex-col items-center mr-2">

                                <span>보통</span>
                                <span class="mb-2">
                                    (0~16)</span>
                                <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="#11B886"
                                    backgroundColor="#11B886" />
                                <img class="w-[1.5rem]" src="/assets/icon/fi-rr-meh.svg" />
                            </div>
                            <div class="flex flex-col items-center mr-2">

                                <span>나쁨</span>
                                <span class="mb-2">
                                    (0~16)</span>
                                <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="#FEBF06"
                                    backgroundColor="#FEBF06" />
                                <img class="w-[1.5rem]" src="/assets/icon/fi-rr-sad.svg" />
                            </div>
                            <div class="flex flex-col items-center mr-2">

                                <span>매우 나쁨</span>
                                <span class="mb-2">
                                    (0~16)</span>
                                <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="#EE5379"
                                    backgroundColor="#EE5379" />
                                <img class="w-[2rem]" src="/assets/icon/warning_circle.svg" />
                            </div>
                        </div>

                        <div class="text-[0.9rem]">
                            <div class="flex items-center">
                                <span class="w-[100px] text-gray-500">미세먼지</span>
                                <ProgressBar barWidth="100" :percentage="100" barColor="#EE5379"
                                    backgroundColor="#e5e7eb" />
                                <span class="ml-auto w-[80px]">8 ㎛/m</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-[100px] text-gray-500">초 미세먼지</span>
                                <ProgressBar barWidth="100" :percentage="80" barColor="#FEBF06"
                                    backgroundColor="#e5e7eb" />
                                <span class="ml-auto w-[80px]">8 ㎛/m</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-[100px] text-gray-500">아황산가스</span>
                                <ProgressBar barWidth="100" :percentage="60" barColor="#11B886"
                                    backgroundColor="#e5e7eb" />
                                <span class="ml-auto w-[80px]">0.008ppm</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-[100px] text-gray-500">일산화탄소</span>
                                <ProgressBar barWidth="100" :percentage="30" barColor="primary"
                                    backgroundColor="#e5e7eb" />
                                <span class="ml-auto w-[80px]">0.008ppm</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-[100px] text-gray-500">기타</span>
                                <ProgressBar barWidth="100" :percentage="10" barColor="primary"
                                    backgroundColor="#e5e7eb" />
                                <span class="ml-auto w-[80px]">0.008ppm</span>
                            </div>
                        </div>

                    </div>
                </div>





            </div>
            <div class="w-2/3 flex flex-col">
                <span class="text-gray-500 text-[20px] mr-2 font-semibold">과거데이터 조회</span>
                <span class=" text-[24px] text-[primary] mr-2 font-semibold">$18,469</span>
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span class="mr-2 text-gray-500">This month</span>
                        <div class="bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                            -2.37%</div>
                    </div>

                    <div class="flex">
                        <button class="mr-3">day</button>
                        <button class="mr-3">week</button>
                        <button class="mr-3">month</button>
                    </div>

                </div>
                <AirPollutionChart class="h-full" />

            </div>

        </div>
        <!-- 대기오염 저감 박스 end -->
    </PopupContainer>

</template>

<script setup>
import PopupContainer from "@/components/common/PopupContainer.vue"
import AirPollutionChart from "../charts/AirPollutionChart.vue"
import ProgressBar from "@/components/ProgressBar.vue"


import TitleBox from "@/components/TitleBox.vue"

defineProps({
    show: Boolean,
    setShow: Function,
})

</script>