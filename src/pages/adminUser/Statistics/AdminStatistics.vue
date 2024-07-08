<template>

    <div class="mr-[20px]" :style="`margin-left:${leftSideBarWidth}`">
        <TitleBox width="100%" text="통계 / 분석" />

        <div class="xl:flex">
            <div class="xl:w-1/2 h-full ">
                <div class="w-full flex border-solid border-2 
                border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3 ">

                    <KanbanBoard2 class="w-1/3" markImg="/assets/icon/thunder.svg" amount="123,123"
                        description="이번주 에너지 사용량" amount2="123,123" description2="지난주 에너지 사용량" />
                    <KanbanBoard2 class="w-1/3" markImg="/assets/icon/sun.svg" amount="123,123"
                        description="이번주 에너지 사용량" amount2="123,123" description2="지난주 에너지 발전량" />
                    <KanbanBoard2 class="w-1/3" markImg="/assets/icon/money_pocket.svg" amount="123,123" unitName="원"
                        description="이번주 에너지 사용량" amount2="123,123" description2="지난주 누적비용" />


                </div>
                <div class="flex">

                    <div class="w-full flex flex-col border-solid border-2 
                border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                        <div class="flex justify-between w-full mb-2">
                            <div class="flex items-center">
                                <span class="mt-2 ml-2">에너지 사용량 통계</span>
                            </div>
                            <div class="ml-auto">
                                <button
                                    class="mr-2 text-primary font-semibold border-b-2 border-primary pb-2">day</button>
                                <button class="mr-2">week</button>
                                <button>month</button>
                            </div>
                        </div>

                        <EnergyUsageChart />



                    </div>




                </div>
                <div class="w-full flex">
                    <div class="w-1/2 flex flex-col border-solid border-2 
                border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                        <div class="flex justify-between items-center w-full mb-2">
                            <div class="flex items-center">
                                <span class=" ml-2">에너지 발전량 통계</span>
                            </div>
                            <div class="ml-auto">
                                <button
                                    class="mr-2 text-primary font-semibold border-b-2 border-primary pb-2">week</button>

                                <button>month</button>
                            </div>
                        </div>
                        <EnergyDevelopmentChart />
                    </div>
                    <div class="w-1/2 flex flex-col border-solid border-2 
                border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                        <div class="flex justify-between items-center w-full mb-2">
                            <div class="flex items-center">
                                <span class=" ml-2">에너지 누적 비용 통계</span>
                            </div>
                            <div class="ml-auto">
                                <button
                                    class="mr-2 text-primary font-semibold border-b-2 border-primary pb-2">week</button>

                                <button>month</button>
                            </div>
                        </div>
                        <EnergyAccumulationChart />

                    </div>
                </div>

            </div>
            <div class="xl:w-1/2">
                <div class="flex">
                    <div class="w-1/2 flex flex-col border-solid border-2 
            border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                        <div class="flex items-center mb-2">

                            <span class="font-semibold">에너지 사용량 통계</span>
                            <div class="ml-auto">
                                <button class="mr-4 text-[#11B886] font-semibold">공정별</button>

                                <button>설비별</button>
                            </div>
                        </div>

                        <div class="ml-auto">
                            <button class="mr-2 text-primary font-semibold border-b-2 border-primary pb-2">week</button>

                            <button>month</button>
                        </div>

                        <div class="mb-4">



                            <GreenGasDayChart />
                        </div>

                    </div>
                    <div class="w-1/2 flex flex-col border-solid border-2 
            border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">


                        <div class="w-full text-center py-2 font-semibold">운영 설비 통계</div>
                        <div class="flex justify-center ">
                            <FacilityOperationChart />
                        </div>

                        <div class="flex flex-col h-full mx-3">
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_1.svg" />
                                    <span>운영중</span>
                                </div>
                                <div class="flex flex-col items-end">
                                    <span class="font-bold">210대</span>
                                    <span class="text-[#11B886] text-[14px]">+10 대</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_2.svg" />
                                    <span>운영중지</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold">11</span>
                                    <span class="text-[#EF4770]">-2 대</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_3.svg" />
                                    <span>고장</span>
                                </div>


                                <div class="flex flex-col items-end">
                                    <span class="font-bold">10 대</span>
                                    <span class="text-[#11B886] text-[14px]">+3 대</span>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>
                <TitleBox width="100%" text="실시간 통계" />
                <div class="flex">
                    <div class="w-1/2 flex flex-col border-solid border-2 
            border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                        <div class="w-full text-center pt-2 pb-6 font-semibold">실시간 다소비 설비 top3</div>
                        <div class="flex flex-col h-full mx-3">
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_1.svg" />
                                    <span>합성실</span>
                                </div>
                                <div class="flex flex-col items-end">
                                    <span class="font-bold">123,123khw</span>

                                    <span class="font-bold">123,123 원</span>
                                    <span class="text-[#11B886] text-[14px]">+12.5%</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_2.svg" />
                                    <span>주입실</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold">123,123khw</span>

                                    <span class="font-bold">123,123 원</span>
                                    <span class="text-[#EF4770]">-2.5%</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_3.svg" />
                                    <span>클린룸</span>
                                </div>


                                <div class="flex flex-col items-end">
                                    <span class="font-bold">123,123khw</span>

                                    <span class="font-bold">123,123 원</span>
                                    <span class="text-[#11B886] text-[14px]">+12.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col border-solid border-2 
            border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                        <div class="w-full text-center pt-2 pb-6 font-semibold">실시간 다소비 공정 top3</div>
                        <div class="flex flex-col h-full mx-3">
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_1.svg" />
                                    <span>합성실</span>
                                </div>
                                <div class="flex flex-col items-end">
                                    <span class="font-bold">123,123khw</span>

                                    <span class="font-bold">123,123 원</span>
                                    <span class="text-[#11B886] text-[14px]">+12.5%</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_2.svg" />
                                    <span>주입실</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold">123,123khw</span>

                                    <span class="font-bold">123,123 원</span>
                                    <span class="text-[#11B886] text-[14px]">+12.5%</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img class="mr-2" src="/assets/icon/sample_3.svg" />
                                    <span>클린룸</span>
                                </div>


                                <div class="flex flex-col items-end">
                                    <span class="font-bold">123,123khw</span>

                                    <span class="font-bold">123,123 원</span>
                                    <span class="text-[#11B886] text-[14px]">+12.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        </div>

    </div>


</template>

<script lang="ts">

import Spacer from "@/components/Spacer.vue";



import TitleBox from "@/components/TitleBox.vue"

import VViewer from "@/components/VViewer.vue";

import Layout from "@/components/Layout.vue"



import ProcessEnergyUsageChart from "./charts/ProcessEnergyUsageChart.vue"
import EnergyDevelopmentChart from "./charts/EnergyDevelopmentChart.vue"
import GreenGasDayChart from "./charts/GreenGasDayChart.vue"
import FacilityOperationChart from './charts/FacilityOperationChart.vue'
import KanbanBoard from "@/components/KanbanBoard.vue";
import ProgressBar from "@/components/ProgressBar.vue"
import KanbanBoard2 from "../../../components/KanbanBoard2.vue";
import EnergyUsageChart from "./charts/EnergyUsageChart.vue";
import EnergyAccumulationChart from "./charts/EnergyAccumulationChart.vue"


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
    components: { Spacer, TitleBox, VViewer, Layout, KanbanBoard, KanbanBoard2, ProcessEnergyUsageChart, EnergyDevelopmentChart, ProgressBar, GreenGasDayChart, FacilityOperationChart, EnergyUsageChart, EnergyAccumulationChart }

};
</script>