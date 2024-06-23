<template>
    <LeftSideBar :menu-list="menuList" />
    <div class="flex">


        <div class="flex overflow-y-auto overflow-x-hidden" style="width: calc(100%);">
            <!-- <div style="margin-left: 2rem;"></div> -->
            <div class="w-full ml-[320px]">
                <TitleBox width="80%" text="통합 모니터링 시스템" />
                <div class="flex">
                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" />
                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" />


                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" />

                    <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" />
                    <Spacer width="2rem" />

                    <!-- <KanbanBoard title="1,352 khw" description="금일 에너지 사용량" /> -->

                </div>
            </div>

            <TitleBox width="20%" text="실시간 기상정보" />

        </div>





    </div>
    <div class="flex ml-[320px] mr-[10vw] w-full">
        <div class="w-[50%]">
            <EnergyUsageDayChart />

        </div>
        <div class="w-[30%]">

            <EnergyUsageFacillityChart />
        </div>

    </div>

    <!-- <VViewer /> -->
</template>

<script lang="ts">

import Spacer from "../../../components/Spacer.vue";

import LeftSideBar from "../../../components/LeftSideBar.vue"

import TitleBox from "../../../components/TitleBox.vue"

import VViewer from "../../../components/VViewer.vue";

import Layout from "../../../components/Layout.vue"

import KanbanBoard from "../../../components/KanbanBoard.vue";
import EnergyUsageDayChart from "./EnergyUsageDayChart.vue";
import EnergyUsageFacillityChart from "./EnergyUsageFacillityChart.vue";

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
    components: { Spacer, LeftSideBar, TitleBox, VViewer, Layout, KanbanBoard, EnergyUsageDayChart, EnergyUsageFacillityChart }

};
</script>