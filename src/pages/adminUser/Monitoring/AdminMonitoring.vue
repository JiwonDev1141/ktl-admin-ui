<template>
    
    <div class="mr-[20px]" :style="`margin-left:${leftSideBarWidth}`">
        <TitleBox width="100%" text="IOT 스마트 생태공장 통합 대시보드" />

        <div class="flex">
            <div class="w-1/2 h-full ">
                <div class="w-full flex  border-solid border-2 
                border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3 ">

                <div class="w-1/2">
                    <div class="flex items-center mb-2 h-[60px]">
                        <img class="mr-2" src="/assets/icon/energy_mark.svg" />
                        <span class="pt-2 font-semibold">종합 에너지 현황</span>
                    </div>

                    <div>

                        <div class="mb-4">
                            <div class="text-gray-500">에너지 사용량</div>
                            <div class="flex justify-between">
                                <span class="text-black text-[1.4rem] mr-2 font-semibold">123,123 khw</span>
                                <div class="flex items-center mt-3">
                                    <span>전일대비</span>
                                    <div
                                        class="ml-2 bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                        -2.65%</div>
                                </div>
                            </div>
                        </div>
    
                        <div class="py-2">
                            <div >
                                <span>재사용 에너지로 인한 저감 비용</span>
                                <div class="flex items-center">
                                    <input class="pl-[1rem] py-3 rounded-md border-[2px]" type="text" value="123,123,123" />
                                    <button class="bg-primary text-white w-[80px] px-2 py-2 rounded-md relative right-[90px] whitespace-nowrap">상세보기</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div class="w-1/2">
                    <div class="flex justify-center items-center w-full h-[60px]">
                        <span class="mr-2 text-gray-500 text-[0.9rem]">에너지 발전량</span>
                        <span class="font-bold text-[1.2rem]">123,123 kwh</span>
                    </div>
                    <div class="flex justify-center relative bottom-[25px]">
                        <EnergyDevelopmentChart />
                    </div>
                   
                </div>
                
                
                
            </div>
            <div class="flex">

                <div class="w-1/2 flex flex-col border-solid border-2 
                border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                    <div class="flex justify-between w-full mb-2">
                        <div class="flex items-center">
                            <img class="w-[29px] h-[29px]" src="/assets/icon/water.svg" />
                            <span class="mt-2 ml-2">수질 현황</span>
                        </div>
                        <button>
                            <img src="/assets/icon/more.svg" />
                        </button>
                    </div>
                    <span class="text-gray-500 text-[0.9rem]">
                        평균수치: 123ppm
                    </span>
                    <div class="flex ml-auto items-center mt-3">
                        <span class="text-gray-500 text-[0.9rem] mr-3">수질상태</span>
                        <div
                            class="bg-[#E7F8F3] text-black text-[0.8rem] font-bold rounded-[16px] px-3 py-1">
                            2등급
                        </div>
                    </div>
                    <div class="bg-primarySoft py-[20px] my-2 mr-3 flex rounded-md ">
                        <span class="font-bold ml-[30px]">0.9</span>
                        <span class="text-gray-500 ml-auto relative top-[15px] mr-2">BOD (mg/L)</span>
                    </div>
                    <div class="bg-primarySoft py-[20px] my-2 mr-3 flex rounded-md">
                        <span class="font-bold ml-[30px]">4.2</span>
                        <span class="text-gray-500 ml-auto relative top-[15px] mr-2">COD (mg/L)</span>
                    </div>
                    <div class="bg-primarySoft py-[20px] my-2 mr-3 flex rounded-md">
                        <span class="font-bold ml-[30px]">2.8</span>
                        <span class="text-gray-500 ml-auto relative top-[15px] mr-2">DO (mg/L)</span>
                    </div>
                </div>
    
                <div class="w-1/2 flex flex-col border-solid border-2 
                border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                    <div class="flex justify-between w-full mb-2">
                        <div class="flex items-center">
                            <img class="w-[29px] h-[29px]" src="/assets/icon/waste.svg" />
                            <span class="mt-2 ml-2">폐기물 배출 현황</span>
                        </div>
                        <button>
                            <img src="/assets/icon/more.svg" />
                        </button>
                    </div>
                    <span class="text-gray-500 text-[0.9rem]">
                        총 배출량: 123,123 T
                    </span>
                    <div class="flex ml-auto items-center mt-3">
                        <span class="text-gray-500 text-[0.9rem] mr-3">전일대비</span>
                        <div
                            class="ml-2 bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                            +2.65%</div>
                    </div>
                    <div class="flex flex-col justify-center h-full">
                        <div class="bg-[#FFF9E6] py-[20px] flex flex-col my-2 ml-3 rounded-md ">
                            <span class="font-bold ml-[30px] mb-2">2,160.36</span>
                            <span class="text-gray-500 ml-[30px] text-[0.9rem]">배출 저감량</span>
                        </div>
                        <div class="bg-[#DBF4EB] py-[20px] flex flex-col my-2 ml-3 rounded-md ">
                            <span class="font-bold ml-[30px] mb-2">850.65</span>
                            <span class="text-gray-500 ml-[30px] text-[0.9rem]">재활용량</span>
                        </div>
                    </div>
                    
                </div>

                
            </div>
            <div class="w-2/3 flex flex-col border-solid border-2 
            border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="mr-2" src="/assets/icon/nature.svg" />
                        <span>금일 대기농도</span>
                    </div>
                    <div class="flex items-center">
                        <img class="mr-2 w-[50px]" src="/assets/icon/warning_circle.svg" />
                        <span class="text-[0.7rem] font-bold">위험 <br/> (81)</span>
                    </div>
                </div>
                <div class="flex justify-center text-[0.8rem] mb-[10%] shadow-lg">
                                    <div class="flex flex-col items-center mr-2">

                                        <span>정상</span>
                                        <span class="mb-2">
                                            (0~25)</span>
                                        <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="primary"
                                            backgroundColor="primary" />
                                        <img class="w-[1.5rem]" src="/assets/icon/fi-rr-smile.svg" />
                                    </div>
                                    <div class="flex flex-col items-center mr-2">

                                        <span>주의</span>
                                        <span class="mb-2">
                                            (26~50)</span>
                                        <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="#11B886"
                                            backgroundColor="#11B886" />
                                        <img class="w-[1.5rem]" src="/assets/icon/fi-rr-meh.svg" />
                                    </div>
                                    <div class="flex flex-col items-center mr-2">

                                        <span>경계</span>
                                        <span class="mb-2">
                                            (51~75)</span>
                                        <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="#FEBF06"
                                            backgroundColor="#FEBF06" />
                                        <img class="w-[1.5rem]" src="/assets/icon/fi-rr-sad.svg" />
                                    </div>
                                    <div class="flex flex-col items-center mr-2">

                                        <span>위험</span>
                                        <span class="mb-2">
                                            (76~100)</span>
                                        <ProgressBar class="mb-2" barWidth="70" :percentage="100" barColor="#EE5379"
                                            backgroundColor="#EE5379" />
                                        <img class="w-[2rem]" src="/assets/icon/warning_circle.svg" />
                                    </div>
                                </div>
        </div>
    
    </div>
    <div class="w-1/2">
        <div class="flex">
            <div class="w-1/2 flex flex-col border-solid border-2 
            border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-4 px-4 ">
            <div class="flex items-center mb-2">
                            <img class="mr-2" src="/assets/icon/factory.svg" />
                            <span class="font-semibold">금일 온실가스 배출</span>
                            
                        </div>
    
                        <div class="mb-4">
                                
                                <div class="flex justify-between">
                                    <div class="flex items-end">
                                        <span class="text-black text-[1.4rem] mr-2 font-semibold">123,123 </span>
                                        <span>tCO2eq</span>
                                    </div>
                                   
                                </div>
                                <div class="flex items-center justify-end py-3 w-full">
                                        <span class='whitespace-nowrap'>전일대비</span>
                                        <div
                                            class="ml-2 bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                            +2.65%</div>
                                    </div>
                                </div>
                                <GreenGasDayChart />
        
        </div>
        <div class="w-1/2 flex flex-col border-solid border-2 
            border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
      
                        
                            <div class="w-full text-center py-2 font-semibold">설비 운영현황</div>

                            <div class="flex justify-center">
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

        <div class="w-full flex flex-col border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 py-3 px-3 ">
            <img class="max-w-[600px] max-h-[600px]" src="/assets/image/factory_sample.png" />
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
    components: { Spacer,  TitleBox, VViewer, Layout, KanbanBoard, ProcessEnergyUsageChart, EnergyDevelopmentChart, ProgressBar, GreenGasDayChart, FacilityOperationChart }

};
</script>