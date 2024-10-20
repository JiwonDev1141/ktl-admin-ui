<template>
    <ReservationEditPop :show="state.showReservationEditPop" :setShow="setShowReservationEditPop" />
    <!-- 장비 삭제 확인 팝업 -->
    <ConfirmPop text="정말 삭제하시겠습니까?" :isRecheck="true" :show="state.showDeleteConfirmPop"
        :setShow="setShowDeleteConfirmPop"
        :confirmCallback="() => { setShowDeleteConfirmPop(false); setShowDeleteInfoPop(true) }" />

    <!-- 장비 삭제 완료 팝업 -->
    <ConfirmPop text="삭제가 완료되었습니다." :show="state.showDeleteInfoPop" :setShow="setShowDeleteInfoPop"
        :confirmCallback="() => { setShowDeleteInfoPop(false); }" />

    <!-- 승인 처리 확인 팝업 -->
    <ConfirmPop text="승인처리 하시겠습니까?" :show="state.showVerifyConfirmPop" :setShow="setShowVerifyConfirmPop"
        :confirmCallback="() => { setShowVerifyConfirmPop(false); setShowVerifyInfoPop(true) }" />

    <!-- 승인 처리 완료 팝업 -->
    <ConfirmPop text="승인 완료되었습니다." :show="state.showVerifyInfoPop" :setShow="setShowVerifyInfoPop"
        :confirmCallback="() => { setShowVerifyInfoPop(false); }" />

    <main :style="`margin-left:${leftSideBarWidth}`">
        <TitleBox width="100%" title="한국산업기술시험원 재자원화 실증장비 운영관리플랫폼" :description="new Date()" />
        <div class="2xl:px-[10%] py-[20px]">
            <header class="mt-[2vh] mb-[5vh]">
                <div class="flex justify-center">
                    <h2 class="text-[1.1rem] font-bold">예약 설정</h2>
                </div>

            </header>
            <main>

            </main>

        </div>
        <!-- <VViewer /> -->



    </main>
</template>

<script lang="ts">
import { reactive } from 'vue';
import Spacer from "@/components/Spacer.vue";



import TitleBox from "@/components/TitleBox.vue"

import VViewer from "@/components/VViewer.vue";

import Layout from "@/components/Layout.vue"

import KanbanBoard from "@/components/KanbanBoard.vue";
import EnergyUsageDayChart from "./charts/EnergyUsageDayChart.vue";
import BehaviorStatusChart from "./charts/BehaviorStatusChart.vue";
import ProcessEnergyUsageChart from "./charts/ProcessEnergyUsageChart.vue"
import EnergyDevelopmentChart from "./charts/EnergyDevelopmentChart.vue"
import SelectBox from "@/components/SelectBox.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import OperationTimeChart from "./charts/OperationTimeChart.vue"

import TableList2 from "@/components/TableList2.vue"

import ConfirmPop from "@/components/ConfirmPop.vue";
import ReservationEditPop from "./ReservationEditPop.vue"

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

        const state = reactive({
            showReservationEditPop: false,
            showDeleteConfirmPop: false,
            showDeleteInfoPop: false,
            showVerifyConfirmPop: false,
            showVerifyInfoPop: false,
        })

        function setShowReservationEditPop(newState: boolean) {
            state.showReservationEditPop = newState;
        }

        function setShowDeleteConfirmPop(newState: boolean) {
            state.showDeleteConfirmPop = newState;
        }

        function setShowDeleteInfoPop(newState: boolean) {
            state.showDeleteInfoPop = newState;
        }

        function setShowVerifyConfirmPop(newState: boolean) {
            state.showVerifyConfirmPop = newState;
        }


        function setShowVerifyInfoPop(newState: boolean) {
            state.showVerifyInfoPop = newState;
        }


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

        const workList = [
            {
                name: '클린룸',
                value: 'CLEAN_ROOM'
            },
            {
                name: '공조실',
                value: 'AIR_CONDITIONING_ROOM'
            },
            {
                name: '사무동',
                value: 'OFFICE_BUILDING_ROOM'
            },
            {
                name: '합성실',
                value: 'SYNTHETIC_ROOM'
            },
            {
                name: '주입실',
                value: 'INFUSION_ROOM'
            },
        ]

        const operationList = [
            {
                name: '흡착탑 1',
                value: 'AC_TOWER_1'
            },
            {
                name: '흡착탑 2',
                value: 'AC_TOWER_2'
            },
            {
                name: '흡착탑 3',
                value: 'AC_TOWER_3'
            },
            {
                name: '흡착탑 4',
                value: 'AC_TOWER_4'
            },
            {
                name: '흡착탑 5',
                value: 'AC_TOWER_5'
            },
        ]


        return {
            state,
            menuList,
            workList,
            operationList,
            setShowReservationEditPop,
            setShowDeleteConfirmPop,
            setShowDeleteInfoPop,
            setShowVerifyConfirmPop,
            setShowVerifyInfoPop,
        };
    },
    components: { Spacer, TitleBox, VViewer, Layout, KanbanBoard, EnergyUsageDayChart, BehaviorStatusChart, ProcessEnergyUsageChart, EnergyDevelopmentChart, SelectBox, ProgressBar, OperationTimeChart, TableList2, ReservationEditPop, ConfirmPop }

};
</script>