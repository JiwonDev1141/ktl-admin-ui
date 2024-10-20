<template>
    <!-- 예약완료 안내 팝업 -->
    <ConfirmPop text="예약이 완료되었습니다." :show="state.showConfirmPop" :setShow="setShowConfirmPop"
        :confirmCallback="() => { setShowConfirmPop(false); }" />
    <div class="mr-[20px]" :style="`margin-left:${leftSideBarWidth}`">
        <TitleBox width="100%" title="한국산업기술시험원 재자원화 실증장비 운영관리플랫폼" :description="new Date()" />

        <main class="px-[15%] py-[20px]">
            <TitleBox width="100%" title="장비 예약" />


            <div class="text-[0.9rem] font-bold flex justify-center mt-[50px] mb-[20px]">장비 선택</div>
            <div class="xl:flex">
                <div class="w-full flex justify-between flex-wrap">
                    <ImageCard @click="() => {
        initEquipSelectedState();
        state.isEquipSelected.card1 = true;
        window.setTimeout(() => {
            window.scrollTo({
                top: 2000,

                behavior: 'smooth'
            });

        }, 0)

    }" :isSelected="state.isEquipSelected.card1" title="파쇄기" imageSrc="/assets/image/crusher.png" color="#E5E7EB"
                        :sensorList="['전력량계', '메인모터(Crusher Speed)', '서브모터(Feeder Speed)']" />
                    <ImageCard @click="{
        initEquipSelectedState(); state.isEquipSelected.card2 = true; window.setTimeout(() => {
            window.scrollTo({
                top: 2000,

                behavior: 'smooth'
            });

        }, 0)
    }" :isSelected="state.isEquipSelected.card2" title="분쇄기" imageSrc="/assets/image/grinder.png" color="#E5E7EB"
                        :sensorList="['전력량계', '메인모터(Pin Mill Speed)', '서브모터(Feeder Speed)']" />
                    <ImageCard @click="{
        initEquipSelectedState(); state.isEquipSelected.card3 = true; window.scrollTo({
            top: 9999999,

            behavior: 'smooth'
        });
    }" :isSelected="state.isEquipSelected.card3" title="로타리 킬른" imageSrc="/assets/image/rotary_kiln.png"
                        color="#E5E7EB" :sensorList="['전력량계', 'TCK 온도계']" />
                    <ImageCard @click="{
        initEquipSelectedState(); state.isEquipSelected.card4 = true; window.setTimeout(() => {
            window.scrollTo({
                top: 2000,

                behavior: 'smooth'
            });

        }, 0)
    }" :isSelected="state.isEquipSelected.card4" title="습식추출장비" imageSrc="/assets/image/wet_extractor.png"
                        color="#E5E7EB" :sensorList="['전력량계', '튜브연동펌프', 'p H 측정기']" />
                </div>
            </div>

            <div class="flex my-[50px] px-2 text-[0.9rem]">
                <div class="w-1/2 pr-2">
                    <div class="font-bold">예약시작일</div>
                    <div class="flex justify-center items-center">
                        시작 일시를 선택하여 주세요 ->
                    </div>
                </div>
                <div class="w-1/2 pr-2">
                    <div class="font-bold">예약종료일</div>
                    <div class="flex justify-center items-center">
                        시작 일시를 선택하여 주세요 ->
                    </div>
                </div>
            </div>

            <div v-if="state.isEquipSelected.card1 === true ||
        state.isEquipSelected.card2 === true ||
        state.isEquipSelected.card3 === true ||
        state.isEquipSelected.card4 === true
        ">
                <div class="flex my-[50px] px-2 text-[0.9rem] font-bold">
                    <div class="w-1/2 pr-3">
                        <div class="mb-2">예약자명</div>
                        <div class="flex justify-center items-center border-[1px] border-gray rounded-md py-2">
                            이이수
                        </div>
                    </div>
                    <div class="w-1/3 pl-3">
                        <div class=" mb-2">직급</div>
                        <div class="flex justify-center items-center border-[1px] border-gray rounded-md py-2">
                            사원
                        </div>
                    </div>
                </div>

                <div class="flex my-[50px] px-2 text-[0.9rem]">
                    <div class="w-full pr-3">
                        <div class="mb-2 font-bold">장비이용관련 정보</div>
                        <input class="w-full flex items-center border-[1px] border-gray rounded-md px-3 py-2"
                            placeholder="About" />

                    </div>
                </div>


                <div class="flex my-[50px] px-2 text-[0.9rem]">
                    <div class="w-full pr-3">
                        <div class="mb-2 font-bold">기타사항</div>
                        <input class="w-full h-[100px] flex border-[1px] border-gray rounded-md px-3 py-2"
                            placeholder="About" />
                    </div>
                </div>
            </div>







        </main>
        <footer v-if="state.isEquipSelected.card1 === true ||
        state.isEquipSelected.card2 === true ||
        state.isEquipSelected.card3 === true ||
        state.isEquipSelected.card4 === true" class="flex justify-center text-[0.9rem] font-bold pb-[50px]">
            <button @click="setShowConfirmPop(true)"
                class="text-white bg-[#6950E8] mx-3 py-2 w-[180px] rounded-xl">예약하기</button>
            <button class="text-white bg-[#D1D5DB] mx-3 py-2 w-[180px] rounded-xl">초기화</button>

        </footer>

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
import ProgressBar from "@/components/ProgressBar.vue";

import ConfirmPop from "@/components/ConfirmPop.vue";

import ImageCard from "./ImageCard.vue"

import { reactive, watch } from "vue";

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

        const state = reactive({
            showConfirmPop: false,
            isEquipSelected: {
                card1: false,
                card2: false,
                card3: false,
                card4: false
            },

        })

        function setShowConfirmPop(newState: boolean) {
            state.showConfirmPop = newState;
        }

        function initEquipSelectedState() {
            state.isEquipSelected = {
                card1: false,
                card2: false,
                card3: false,
                card4: false
            }
        }


        return {
            menuList,
            state,
            initEquipSelectedState,
            setShowConfirmPop,
        };
    },
    components: {
        Spacer, TitleBox, VViewer, Layout, KanbanBoard,
        ProcessEnergyUsageChart, EnergyDevelopmentChart, ProgressBar,
        GreenGasDayChart, FacilityOperationChart,
        ConfirmPop,
        ImageCard
    }

};
</script>