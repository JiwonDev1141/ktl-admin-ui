<template>
    <PopupContainer v-show="show === true">
        
             
             
        <TitleBox width="550px" text="설비운영 현황" :setShow="setShow" />

                 <!-- 설비운영 현황 박스 start -->
                 <div :style="`width: 550px;`" class="flex flex-col justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200
        bg-white
        ">
                    <div class="flex justify-between w-full py-4">
                        <span class="text-[1rem] flex justify-center w-1/2">
                            공정별 운영현황
                        </span>
                       
                        <SelectBox />
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <span class="text-[1rem] w-1/2">

                            <OperationChart />
                        </span>
                        <div class="flex flex-col justify-center w-1/2 h-full ml-4">
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_1.svg" />
                                    <span>운영중</span>
                                </div>
                                <div class="flex flex-col items-end">
                                    <span class="font-bold">111</span>
                                    <span class="text-[#11B886] text-[14px]">+2.5%</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_2.svg" />
                                    <span>가동중지</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold">11</span>
                                    <span class="text-[#EF4770]">-1.56%</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_3.svg" />
                                    <span>고장</span>
                                </div>


                                <div class="flex flex-col items-end">
                                    <span class="font-bold">32</span>
                                    <span class="text-[#11B886] text-[14px]">+3.23%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- 설비운영 현황 박스 end -->
                </PopupContainer>

    </template>
    
    <script setup>
    import PopupContainer from "@/components/common/PopupContainer.vue"
    import OperationChart from "../charts/OperationChart.vue"


    import SelectBox from "@/components/SelectBox.vue"
    import TitleBox from "@/components/TitleBox.vue"
    
    defineProps({
        show: Boolean,
        setShow: Function,
    })
    
    </script>