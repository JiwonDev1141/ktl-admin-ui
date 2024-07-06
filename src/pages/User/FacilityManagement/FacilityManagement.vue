<template>
 
    <div class="flex mr-[20px]" :style="`margin-left:${leftSideBarWidth}`">


        <div class="flex overflow-y-auto w-full">
            <!-- <div style="margin-left: 2rem;"></div> -->
            <div class="w-full ">
                <TitleBox width="100%" text="가동 설비 관리" />
               
            </div>
        </div>
    </div>
    <div class="flex w-1/2 justify-between" :style="`margin-left:${leftSideBarWidth}`">
        <div class="flex justify-between items-center">
            <span class="font-semibold text-[0.8rem] mr-3">작업 공정</span>

       
            <SelectBox :callback="(value) => {console.log(value)}" />
        </div>
        <div>
            <span class="font-semibold text-[0.8rem] mr-3">작업 공정</span>

            <select class="text-[0.8rem] border-[1px] border-primary rounded-md px-[50px] py-1">
                <option>흑착탑</option>
                <option>...</option>
            </select>
        </div>
    </div>

    

    <div class="flex">
        <div 
        :style="`margin-left:${leftSideBarWidth}; width: calc(100% - ${leftSideBarWidth});`"
        class="flex w-2/3">
            <div class="w-full flex flex-col border-solid border-2 
            border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 pt-3">
                <div class="flex justify-between">
                    <h3 class="text-[0.8rem] font-semibold">에너지 사용량 추이</h3>
                    <div class="flex">
                        <button class="mr-3 text-primary cursor-pointer ">week</button>
                        <button class="cursor-pointer ">month</button>
    
                    </div>
                </div>
                <div class="ml-3">
    
                    <EnergyUsageDayChart />
                </div>
            </div>
       
    
        </div>
        
        <div class="w-1/3 flex flex-col border-solid border-2
            border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 py-3">
            <div class="flex justify-between py-2">
                <h3 class="text-[0.8rem] font-semibold">설비 이벤트 목록</h3>
                <img class="w-[16px] h-[16px]" src="/assets/icon/more.svg" />
            </div>

            <div class="flex justify-between py-1">
                <div class="flex flex-col">
                    <span class="text-[1rem] font-semibold">흑찹탑 1</span>
                    <span class="text-[0.8rem] text-gray-600">기능 고장</span>
                </div>
                <img src="/assets/icon/next.svg" />
            </div>

            <div class="flex justify-between py-1">
                <div class="flex flex-col">
                    <span class="text-[1rem] font-semibold">흑찹탑 2</span>
                    <span class="text-[0.9rem] text-gray-600">기능 고장</span>
                </div>
                <img src="/assets/icon/next.svg" />
            </div>

            <div class="flex justify-between py-1">
                <div class="flex flex-col">
                    <span class="text-[1rem] font-semibold">흑찹탑 3</span>
                    <span class="text-[0.9rem] text-gray-600">기능 고장</span>
                </div>
                <img src="/assets/icon/next.svg" />
            </div>

            <div class="flex justify-between py-1">
                <div class="flex flex-col">
                    <span class="text-[1rem] font-semibold">흑찹탑 4</span>
                    <span class="text-[0.9rem] text-gray-600">기능 고장</span>
                </div>
                <img src="/assets/icon/next.svg" />
            </div>

            
        </div>

     

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
import SelectBox from "@/components/SelectBox.vue";

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
    components: { Spacer,  TitleBox, VViewer, Layout, KanbanBoard, EnergyUsageDayChart, EnergyUsageFacillityChart, ProcessEnergyUsageChart, EnergyDevelopmentChart, SelectBox }

};
</script>