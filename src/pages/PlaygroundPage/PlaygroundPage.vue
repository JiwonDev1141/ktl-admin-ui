<template>
    <!-- <LeftSideBar :menu-list="menuList" /> -->
    <div class="flex">


        <div class="flex overflow-y-auto overflow-x-hidden" style="width: calc(100%);">
            <!-- <div style="margin-left: 2rem;"></div> -->
            <div class="w-full">
                <TitleBox width="550px" text="설비운영 현황" />
                <!-- 설비운영 현황 박스 start -->
                <div :style="`width: 550px;`" class="flex flex-col justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200
    
        ">
                    <div class="flex justify-between w-full pt-2">
                        <span class="text-[1rem] flex justify-center w-1/2">
                            공정별 운영현황
                        </span>
                        <select class="flex justify-center w-1/2 text-center">
                            <option>클린룸</option>
                            <option>공조실</option>
                            <option>사무동</option>
                            <option>급조실</option>
                            <option>공정 외부</option>

                        </select>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <span class="text-[1rem] w-1/2">

                            <OperationChart />
                        </span>
                        <div class="flex flex-col w-1/2 h-full ml-4">
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

                <!-- 수질오염 저감 박스 start -->
                <TitleBox text="수질오염 저감" width="740px" />
                <div class="w-[740px] flex flex-col justify-center border-solid border-2 
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
                            <div class="px-[25%]">
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
                <!-- 수질오염 저감 박스 end -->

                <!-- 온실가스 저감 박스 start -->
                <TitleBox text="온실가스 저감" width="1145px" />
                <div class="w-[1145px] flex justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3">


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
                        <span class="text-gray-500 text-[20px] mr-2 font-semibold">공정별 온실가스 배출량</span>
                        <GreenGasBarChart class="pt-[30px]" />
                    </div>

                </div>
                <!-- 온실가스 저감 박스 end -->

                <!-- 대기오염 저감 박스 start -->
                <TitleBox text="대기오염 저감" width="1145px" />
                <div class="w-[1145px] flex justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3">


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
                                        <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="#6950e8"
                                            backgroundColor="#6950e8" />
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
                                        <ProgressBar barWidth="100" :percentage="30" barColor="#6950e8"
                                            backgroundColor="#e5e7eb" />
                                        <span class="ml-auto w-[80px]">0.008ppm</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="w-[100px] text-gray-500">기타</span>
                                        <ProgressBar barWidth="100" :percentage="10" barColor="#6950e8"
                                            backgroundColor="#e5e7eb" />
                                        <span class="ml-auto w-[80px]">0.008ppm</span>
                                    </div>
                                </div>

                            </div>
                        </div>





                    </div>
                    <div class="w-2/3 flex flex-col">
                        <span class="text-gray-500 text-[20px] mr-2 font-semibold">과거데이터 조회</span>
                        <span class=" text-[24px] text-[#6950E8] mr-2 font-semibold">$18,469</span>
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

                <!-- 폐기물배출 저감 박스 start -->
                <TitleBox text="폐기물배출 저감" width="1145px" />
                <div class="w-[1145px] flex justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3">


                    <div class="w-[40%]">

                        <div class="bg-gray-100 rounded-lg pb-4 pr-1 mr-4">

                            <div class="bg-white rounded-lg text-[0.9rem]">
                                <div class="flex flex-col px-2 py-3">
                                    <span>폐기물 발생량</span>
                                    <span class="font-semibold">35 T</span>
                                    <div>
                                        <WasteChart />
                                    </div>
                                </div>

                                <div class="text-[0.9rem] px-2">
                                    <div class="flex items-center justify-between py-2">
                                        <span class="w-[80px] font-semibold">폐기물 1</span>
                                        <div class="flex">
                                            <img class="mr-2 " src="/assets/icon/dot_3.svg" />
                                            <span>60%</span>
                                        </div>
                                        <span class=" w-[80px]">20 T</span>
                                    </div>
                                    <div class="flex items-center justify-between py-2">
                                        <span class="w-[80px] font-semibold">폐기물 2</span>
                                        <div class="flex">
                                            <img class="mr-2 " src="/assets/icon/dot_1.svg" />
                                            <span>10%</span>
                                        </div>
                                        <span class="w-[80px]">5 T</span>

                                    </div>
                                    <div class="flex items-center justify-between py-2">
                                        <span class="w-[80px] font-semibold">폐기물 3</span>
                                        <div class="flex">
                                            <img class="mr-2 " src="/assets/icon/dot_2.svg" />
                                            <span>30%</span>
                                        </div>
                                        <span class="w-[80px]">10 T</span>
                                    </div>

                                </div>

                            </div>
                        </div>





                    </div>
                    <div class="w-[60%] flex flex-col">
                        <span class="text-gray-500 text-[20px] mr-2 font-semibold">폐기물 발생 추이</span>

                        <div class="flex justify-between items-center">
                            <div class="flex">
                                <!-- <span class="mr-2 text-gray-500">This month</span>
                                <div class="bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                    -2.37%</div> -->
                            </div>

                            <div class="flex">
                                <button class="mr-3">day</button>
                                <button class="mr-3">week</button>
                                <button class="mr-3">month</button>
                            </div>

                        </div>
                        <WasteLineChart class="h-full my-2" />

                    </div>

                </div>
                <!-- 폐기물배출 저감 박스 end -->


                <!-- 이벤트 목록 박스 start -->
                <TitleBox text="이벤트 목록" width="747px" />
                <div class="w-[747px] flex justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3">


                    <div class="w-full">

                        <div class="bg-gray-100 rounded-lg pb-4 pr-1 mr-4">

                            <div class="bg-white rounded-lg text-[0.9rem]">


                                <div class="text-[0.9rem] px-4">
                                    <div class="flex items-center justify-between py-2">
                              
                                           <span class="text-gray-500 font-semibold">이벤트 명</span>
                                  
                                      
                                            <span class="text-gray-500 font-semibold">발생 일시</span>

                                    
                                        <span class="text-gray-500 font-semibold">발생 장소</span>

                                    
                                        <span class="text-gray-500 font-semibold">이벤트 등급</span>


                                    </div>
                                    <div class="flex items-center justify-between py-2">
                                        <div class="flex flex-col">
                                            <span class="w-[80px] font-semibold">화재 발생</span>
                                            <span class="text-[0.8rem] text-gray-500">#52858923</span>

                                        </div>
                                        <div class="flex flex-col">

                                            <span class="font-semibold">2024-05-10</span>
                                            <span class="text-[0.8rem] text-gray-500">17:23:10</span>
                                        </div>
                                    
                                        <span class=" w-[80px] text-center">합성실</span>
                                    
                                        <div
                                            class="w-[80px] text-center bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                            CRITICAL</div>

                                    </div>
                                    <div class="flex items-center justify-between py-2">
                                        <div class="flex flex-col">
                                            <span class="w-[80px] font-semibold">설비 고장</span>
                                            <span class="text-[0.8rem] text-gray-500">#52858923</span>

                                        </div>
                                        <div class="flex flex-col">

                                            <span class="font-semibold">2024-05-10</span>
                                            <span class="text-[0.8rem] text-gray-500">17:24:30</span>
                                        </div>
                                    
                                        <span class=" w-[80px] text-center">합성실</span>
                                    
                                        <div
                                            class="w-[80px] text-center bg-[#fff9e6] text-[#db7e24] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                            MAJOR</div>

                                    </div>
                                    <div class="flex items-center justify-between py-2">
                                        <div class="flex flex-col">
                                            <span class="w-[80px] font-semibold">화재 발생</span>
                                            <span class="text-[0.8rem] text-gray-500">#52858923</span>

                                        </div>
                                        <div class="flex flex-col">

                                            <span class="font-semibold">2024-05-10</span>
                                            <span class="text-[0.8rem] text-gray-500">17:24:10</span>
                                        </div>
                                    
                                        <span class=" w-[80px] text-center">주입실</span>
                                    
                                        <div
                                            class="w-[80px] text-center bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                            CRITICAL</div>

                                    </div>

                                </div>

                            </div>
                        </div>





                    </div>

                </div>
                <!-- 이벤트 목록 박스 end -->



                <div class="flex">
                    <!-- <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" />
                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" />


                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" />

                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" /> -->

                    <!-- <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" /> -->

                </div>
            </div>

            <!-- <TitleBox width="20%" text="실시간 기상정보" /> -->

        </div>





    </div>
    <div class="flex ml-[320px] mr-[10vw] w-full">
        <div class="w-[50%]">


        </div>
        <div class="w-[30%]">


        </div>

    </div>

    <!-- <VViewer /> -->
</template>

<script lang="ts">

import Spacer from "@/components/Spacer.vue";

import LeftSideBar from "@/components/LeftSideBar.vue"

import TitleBox from "@/components/TitleBox.vue"

import VViewer from "@/components/VViewer.vue";

import Layout from "@/components/Layout.vue"

import KanbanBoard from "@/components/KanbanBoard.vue";

import OperationChart from "./charts/OperationChart.vue";

import WaterUsageChart from "./charts/WaterUsageChart.vue";

import WaterInfoChart from "./charts/WaterInfoChart.vue"

import GreenGasChart from "./charts/GreenGasChart.vue"

import GreenGasBarChart from "./charts/GreenGasBarChart.vue"

import AirPollutionChart from "./charts/AirPollutionChart.vue"

import WasteChart from "./charts/WasteChart.vue"

import WasteLineChart from "./charts/WasteLineChart.vue"


import ProgressBar from "@/components/ProgressBar.vue"


interface menu {
    menuTitle: string;

    submenuList: Array<submenu>
}

interface submenu {
    name: string;
    svg: string | null;
}



export default {


    setup() {

        const menuList: Array<menu> = [
            {
                menuTitle: 'Dashboard',
                submenuList: [
                    {
                        name: "통합 모니터링",
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.8125 3.5H21.1875C21.9124 3.5 22.5 4.18556 22.5 5.03125V9.625H20.75V5.54167H3.25V15.75H13.75V23.9167H8.0625C7.82088 23.9167 7.625 23.6881 7.625 23.4062V22.3854C7.625 22.1035 7.82088 21.875 8.0625 21.875H8.2725C8.94287 21.8824 9.55795 21.4423 9.85625 20.7419L10.25 19.8333H2.8125C2.08763 19.8333 1.5 19.1478 1.5 18.3021V5.03125C1.5 4.18556 2.08763 3.5 2.8125 3.5ZM20.75 11.6667H17.25C16.2835 11.6667 15.5 12.5807 15.5 13.7083V21.875C15.5 23.0026 16.2835 23.9167 17.25 23.9167H20.75C21.7165 23.9167 22.5 23.0026 22.5 21.875V13.7083C22.5 12.5807 21.7165 11.6667 20.75 11.6667ZM20.75 21.875H17.25V13.7083H20.75V21.875Z"
                                    fill="#6B7280" />
                            </svg>`
                    },
                    {
                        name: "종합 환경정보",
                        svg: null
                    },
                    {
                        name: "통계/분석",
                        svg: null
                    }
                ]
            },

        ]


        return {
            menuList,

        };
    },
    components: { Spacer, LeftSideBar, TitleBox, VViewer, Layout, KanbanBoard, OperationChart, WaterUsageChart, WaterInfoChart, GreenGasChart, GreenGasBarChart, AirPollutionChart, WasteChart, WasteLineChart, ProgressBar }

};
</script>