<template>
    
    <div class="flex mr-[20px]" :style="`margin-left:${leftSideBarWidth}`">


        <div class="flex overflow-y-auto w-full">
            <!-- <div style="margin-left: 2rem;"></div> -->
            <div class="w-full ">
                <TitleBox width="100%" text="에너지 관리" />
                <div class="grid grid-cols-4 gap-[20px] pl-3 w-full">
                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" markImg="/assets/icon/thunder.svg" />
             
                    <KanbanBoard title="1,352 khw" description="금일 에너지 발전량" markImg="/assets/icon/sun.svg" />
             


                    <KanbanBoard title="1,234원" description="누적 비용" markImg="/assets/icon/money.svg" />
             

                    <KanbanBoard title="+23%" description="에너지 차감률" markImg="/assets/icon/energy_down.svg" />
             

                    <!-- <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" /> -->

                </div>
            </div>

         

        </div>





    </div>
    <div 
    :style="`margin-left:${leftSideBarWidth}; width: calc(100% - ${leftSideBarWidth});`"
    :class="`flex`">
        <div class="w-full flex flex-col border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3">
            <h3 class=" font-semibold">금일 에너지 현황</h3>
            <div class="ml-3">

                <EnergyUsageDayChart />
            </div>
        </div>
   

    </div>

    <div class="flex" :style="`margin-left:${leftSideBarWidth}; width: calc(100% - ${leftSideBarWidth});`">
    <!-- 공정별 에너지 사용량 박스 start -->
                <div class="w-1/3 h-[400px] flex flex-col border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3 min-h-[300px]">
                    <!--  -->
                    <div class="w-full">
                        <div class="flex">
                            <div class="w-full">
                                <div class="flex justify-center">
                                    <h2 class="font-semibold">공정별 에너지 사용량</h2>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-primary text-[22px] mr-2 font-semibold">1,352 khw</span>
                                    <div
                                        class="bg-[#e7f8f3] text-[#11B886] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                        +2.65%</div>
                                </div>
                                <div class="w-full">
                                    <span class="text-gray-400 font-semibold text-[0.9rem]">금일 에너지 사용량</span>
                                    <div class="flex w-full items-center ">

                                        <ProcessEnergyUsageChart />

                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->

              
                    </div>

                  

                </div>
    <!-- 공정별 에너지 사용량 박스 end -->


                 <!-- 설비별 에너지 사용량 박스 start -->
                 <div class="w-1/3 h-[400px] flex flex-col  border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3  min-h-[300px]">
                    <!--  -->
                    <div class="w-full">
                        <div class="flex">
                            <div class="w-full">
                                <div class="flex justify-center">
                                    <h2 class="font-semibold">설비별 에너지 사용량</h2>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-primary text-[22px] mr-2 font-semibold">123,123 khw</span>
                                    <div
                                        class="bg-[#fdedf1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                        +2.65%</div>
                                </div>
                                <div class="h-full">
                                    <span class="text-gray-400 font-semibold text-[0.9rem]">금일 에너지 사용량</span>
                                    <div class="flex w-full h-full justify-around items-center ">

                                        <EnergyUsageFacillityChart />

                                        <div class="text-[0.9rem]">
                                            <div class="flex items-center mb-3">
                                                <div class="rounded-full w-[6px] h-[6px] bg-primary mr-2 "></div>
                                                <span class="w-[100px] text-gray-500">흡착탑</span>
                                                <span class="font-semibold">10%</span>
                                            </div>
                                            <div class="flex items-center mb-3">
                                                <div class="rounded-full w-[6px] h-[6px] bg-[#11B886] mr-2 "></div>
                                                <span class="w-[100px] text-gray-500">전동기</span>
                                                <span class="font-semibold">10%</span>
                                            </div>
                                            <div class="flex items-center mb-3">
                                                <div class="rounded-full w-[6px] h-[6px] bg-[#EF4770] mr-2 "></div>
                                                <span class="w-[100px] text-gray-500">응결수 탱크</span>
                                                <span class="font-semibold">10%</span>
                                            </div>
                                            <div class="flex items-center mb-3">
                                                <div class="rounded-full w-[6px] h-[6px] bg-[#111827] mr-2 "></div>
                                                <span class="w-[100px] text-gray-500">화재 설비</span>
                                                <span class="font-semibold">10%</span>
                                            </div>
                                            <div class="flex items-center mb-3">
                                                <div class="rounded-full w-[6px] h-[6px] bg-[#6B7280] mr-2 "></div>
                                                <span class="w-[100px] text-gray-500">기타</span>
                                                <span class="font-semibold">10%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->

              
                    </div>

                  

                </div>
                <!-- 설비별 에너지 사용량 박스 end -->

                <!-- 에너지 발전 현황 박스 start -->

                <div class="w-1/3 h-[400px] flex flex-col border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3  min-h-[300px]">
                    <!--  -->
                    <div class="w-full">
                        <div class="flex">
                            <div class="w-full">
                                <div class="flex justify-center">
                                    <h2 class="font-semibold">에너지 발전 현황</h2>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-primary text-[22px] mr-2 font-semibold">123,123 khw</span>
                                    <div
                                        class="bg-[#fdedf1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                        -2.65%</div>
                                </div>
                                <div class="w-full h-full">
                                    <span class="text-gray-400 font-semibold text-[0.9rem]">금일 에너지 사용량</span>
                                    <div class="flex w-full h-full justify-center items-center">
                                        
                                        <EnergyDevelopmentChart />

                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->

              
                    </div>

                  

                </div>
                <!-- 에너지 발전 현황 박스 end -->
        
    </div>

    <!-- <VViewer /> -->
</template>

<script lang="ts">

import Spacer from "@/components/Spacer.vue";



import TitleBox from "@/components/TitleBox.vue"

import VViewer from "@/components/VViewer.vue";

import Layout from "@/components/Layout.vue"

import KanbanBoard from "@/components/KanbanBoard.vue";
import EnergyUsageDayChart from "./charts/EnergyUsageDayChart.vue";
import EnergyUsageFacillityChart from "./charts/EnergyUsageFacillityChart.vue";
import ProcessEnergyUsageChart from "./charts/ProcessEnergyUsageChart.vue"
import EnergyDevelopmentChart from "./charts/EnergyDevelopmentChart.vue"

interface menu {
    menuTitle: string;

    submenuList: Array<submenu>
}

interface submenu {
    name: string;
    svg: string | null;
}



export default {

    data() {
        return {
            leftSideBarWidth: '260px'
        }
    },
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
    components: { Spacer,  TitleBox, VViewer, Layout, KanbanBoard, EnergyUsageDayChart, EnergyUsageFacillityChart, ProcessEnergyUsageChart, EnergyDevelopmentChart }

};
</script>