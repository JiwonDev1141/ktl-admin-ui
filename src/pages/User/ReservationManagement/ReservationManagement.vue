<template>
    <ReservationEditPop :show="state.showReservationEditPop" :setShow="setShowReservationEditPop" />
    <main :style="`margin-left:${leftSideBarWidth}`">
        <TitleBox width="100%" title="한국산업기술시험원 재자원화 실증장비 운영관리플랫폼" :description="new Date()" />
        <div class="2xl:mx-[5%] my-[5vh] shadow-lg">
            <header class="py-[1vh] px-[2rem] flex justify-between items-center">

                <h2 class="text-[1.2rem] font-bold">나의 예약내역</h2>

                <div class="flex justify-between">
                    <div class="flex items-center">
                        <input type="text"
                            class="px-2 py-3 border-2 border-gray pr-[5rem] pl-[2rem] rounded-md text-[0.8rem]"
                            placeholder="Search" />
                        <img class="w-[16px] h-[16px] absolute ml-[1rem] mb-1" src="/assets/icon/search.png" />
                    </div>
                </div>
            </header>
            <main class="mt-2">



                <ReservationTable :headerData="[

        `<div>예약번호</div>`,
        `<div>예약시작일</div>`,
        `<div>예약종료일</div>`,
        `<div>장비명</div>`,
        `<div>장비이용관련 정보</div>`,
        `<div>수정 및 삭제</div>`,

    ]" :bodyData="[
        `<div class='font-bold'>#11</div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>10:00AM</span>
        </div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>08:00AM</span>
        </div>`,
        `<div class='text-gray-500'>로타리 킬른</div>`,
        `<div class='text-gray-500'>장비 점검</div>`,
        `<div class='flex'>
                <button onClick='setShowReservationEditPop(true)'><img src='/assets/icon/pencil.png' class='w-[16px] h-[16px] mr-2' /></button>
                <button><img src='/assets/icon/trashcan.png' class='w-[16px] h-[16px] ml-2' /></button>

        </div>`,

        `<div class='font-bold'>#11</div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>10:00AM</span>
        </div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>08:00AM</span>
        </div>`,
        `<div class='text-gray-500'>로타리 킬른</div>`,
        `<div class='text-gray-500'>장비 점검</div>`,
        `<div class='flex'>
                <button><img src='/assets/icon/pencil.png' class='w-[16px] h-[16px] mr-2' /></button>
                <button><img src='/assets/icon/trashcan.png' class='w-[16px] h-[16px] ml-2' /></button>

        </div>`,

        `<div class='font-bold'>#11</div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>10:00AM</span>
        </div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>08:00AM</span>
        </div>`,
        `<div class='text-gray-500'>로타리 킬른</div>`,
        `<div class='text-gray-500'>장비 점검</div>`,
        `<div class='flex'>
                <button><img src='/assets/icon/pencil.png' class='w-[16px] h-[16px] mr-2' /></button>
                <button><img src='/assets/icon/trashcan.png' class='w-[16px] h-[16px] ml-2' /></button>

        </div>`,

        `<div class='font-bold'>#11</div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>10:00AM</span>
        </div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>08:00AM</span>
        </div>`,
        `<div class='text-gray-500'>로타리 킬른</div>`,
        `<div class='text-gray-500'>장비 점검</div>`,
        `<div class='flex'>
                <button><img src='/assets/icon/pencil.png' class='w-[16px] h-[16px] mr-2' /></button>
                <button><img src='/assets/icon/trashcan.png' class='w-[16px] h-[16px] ml-2' /></button>

        </div>`,

        `<div class='font-bold'>#11</div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>10:00AM</span>
        </div>`,
        `<div class='flex flex-col text-gray-500'>
            <span>2024/09/08</span>
            <span>08:00AM</span>
        </div>`,
        `<div class='text-gray-500'>로타리 킬른</div>`,
        `<div class='text-gray-500'>장비 점검</div>`,
        `<div class='flex'>
                <button><img src='/assets/icon/pencil.png' class='w-[16px] h-[16px] mr-2' /></button>
                <button><img src='/assets/icon/trashcan.png' class='w-[16px] h-[16px] ml-2' /></button>

        </div>`,
    ]" />
            </main>

        </div>




        <!-- <VViewer /> -->

    </main>

    <!-- <VViewer /> -->
</template>

<script lang="ts">

import Spacer from "@/components/Spacer.vue";



import TitleBox from "@/components/TitleBox.vue"

import VViewer from "@/components/VViewer.vue";

import Layout from "@/components/Layout.vue"

import KanbanBoard from "@/components/KanbanBoard.vue";

import ReservationTable from "./ReservationTable.vue"

import ReservationEditPop from "./ReservationEditPop.vue"

import { reactive } from 'vue';

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
            showReservationEditPop: true,
        })

        function setShowReservationEditPop(newState) {
            state.showReservationEditPop = newState;
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


        return {
            state,
            menuList,
            setShowReservationEditPop,
        };
    },
    components: { Spacer, TitleBox, VViewer, Layout, KanbanBoard, ReservationTable, ReservationEditPop }

};
</script>