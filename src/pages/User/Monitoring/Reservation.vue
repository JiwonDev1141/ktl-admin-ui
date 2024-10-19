<template>
    <WaterInfoPopup :show="state.showWaterInfoPopup" :setShow="setShowWaterInfoPopup" />
    <WasteInfoPopup :show="state.showWasteInfoPopup" :setShow="setShowWasteInfoPopup" />
    <GreenGasPopup :show="state.showGreenGasPopup" :setShow="setShowGreenGasPopup" />
    <OperationPopup :show="state.showOperationPopup" :setShow="setShowOperationPopup" />
    <PollutionPopup :show="state.showPollutionPopup" :setShow="setShowPollutionPopup" />
    <div class="mr-[20px]" :style="`margin-left:${leftSideBarWidth}`">
        <TitleBox width="100%" title="한국산업기술시험원 재자원화 실증장비 운영관리플랫폼" :description="new Date()" />

        <div class="px-[10%] py-[20px]">
            <TitleBox width="100%" title="예약 현황" />

            <div class="py-2"></div>

            <div class="pt-2 xl:flex">
                <div class="w-full flex justify-between flex-wrap">
                    <ImageCard title="전체" imageSrc="/assets/image/all_equips.png" color="black" />
                    <ImageCard title="파쇄기" imageSrc="/assets/image/crusher.png" />
                    <ImageCard title="분쇄기" imageSrc="/assets/image/grinder.png" color="#f26587" />
                    <ImageCard title="로타리 킬른" imageSrc="/assets/image/rotary_kiln.png" color="#FEBF06" />
                    <ImageCard title="습식추출장비" imageSrc="/assets/image/wet_extractor.png" color="#B200DF" />
                </div>




            </div>


            <div class="rounded-md border-2 border-gray text-center w-1/2 my-3 py-2 ml-[50%] translate-x-[-50%]">
                2024/09/26 예약 내역</div>
            <TableList :headerData="['장비명', '예약시작일', '예약종료일', '예약자명', '장비이용관련정보']" :bodyData="[
        '로타리 킬른 \n #52', '2024-09-26 \n 08:00', '2024-09-26 \n 08:00', '이이수', '장비 점검',
        '로타리 킬른 \n #52', '2024-09-26 \n 08:00', '2024-09-26 \n 08:00', '이이수', '장비 점검',
        '로타리 킬른 \n #52', '2024-09-26 \n 08:00', '2024-09-26 \n 08:00', '이이수', '장비 점검',
    ]" />

        </div>

    </div>




</template>

<script lang="ts">

import Spacer from "@/components/Spacer.vue";



import TitleBox from "@/components/TitleBox.vue"

import VViewer from "@/components/VViewer.vue";

import Layout from "@/components/Layout.vue"

import WaterInfoPopup from "./popup/WaterInfoPopup.vue"
import WasteInfoPopup from "./popup/WasteInfoPopup.vue"
import GreenGasPopup from "./popup/GreenGasPopup.vue"
import OperationPopup from "./popup/OperationPopup.vue"
import PollutionPopup from "./popup/PollutionPopup.vue"


import ProcessEnergyUsageChart from "./charts/ProcessEnergyUsageChart.vue"
import EnergyDevelopmentChart from "./charts/EnergyDevelopmentChart.vue"
import GreenGasDayChart from "./charts/GreenGasDayChart.vue"
import FacilityOperationChart from './charts/FacilityOperationChart.vue'
import KanbanBoard from "@/components/KanbanBoard.vue";
import ProgressBar from "@/components/ProgressBar.vue"
import ImageCard from "@/components/ImageCard.vue"
import TableList from "@/components/TableList.vue";

import router from "@/router"

import { reactive } from "vue"

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

        const routeToEnergyManagementVue = () => {
            router.push("/energy-management")
        }

        const state = reactive({
            showWaterInfoPopup: false,
            showWasteInfoPopup: false,
            showGreenGasPopup: false,
            showOperationPopup: false,
            showPollutionPopup: false,
        })

        const setShowWaterInfoPopup = (newState: boolean) => {
            state.showWaterInfoPopup = newState;
        }

        const setShowWasteInfoPopup = (newState: boolean) => {
            state.showWasteInfoPopup = newState;
        }

        const setShowGreenGasPopup = (newState: boolean) => {
            state.showGreenGasPopup = newState;
        }

        const setShowOperationPopup = (newState: boolean) => {
            state.showOperationPopup = newState;
        }

        const setShowPollutionPopup = (newState: boolean) => {
            state.showPollutionPopup = newState;
        }



        return {
            menuList,
            router,
            state,
            routeToEnergyManagementVue,
            setShowWaterInfoPopup,
            setShowWasteInfoPopup,
            setShowGreenGasPopup,
            setShowOperationPopup,
            setShowPollutionPopup
        };
    },
    components: {
        Spacer, TitleBox, VViewer, Layout, KanbanBoard, ImageCard,
        TableList,
        ProcessEnergyUsageChart, EnergyDevelopmentChart, ProgressBar, GreenGasDayChart,
        FacilityOperationChart, WaterInfoPopup, WasteInfoPopup, GreenGasPopup, OperationPopup, PollutionPopup
    }

};
</script>