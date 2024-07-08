<template>

    <body :style="`margin-left:${leftSideBarWidth}`">
        <div class="flex mr-[20px]">


            <div class="flex overflow-y-auto w-full">
                <!-- <div style="margin-left: 2rem;"></div> -->
                <div class="w-full ">
                    <TitleBox width="100%" text="가동 설비 관리" />

                </div>
            </div>
        </div>
        <div class="xl:flex">
            <div class="xl:w-2/4">
                <div class="flex flex-wrap justify-between px-3 py-3">
                    <div class="flex items-center">
                        <span class="font-semibold text-[0.8rem] mr-3">작업 공정</span>


                        <SelectBox width="250px" :callback="(value) => { console.log(value) }" :menuList="workList" />
                    </div>
                    <div class="flex items-center">
                        <span class="font-semibold text-[0.8rem] mr-3">운영 설비</span>

                        <SelectBox width="250px" :callback="(value) => { console.log(value) }"
                            :menuList="operationList" />
                    </div>

                </div>
                <div class="w-full flex flex-col border-solid border-2 bg-[#F8F8F8]
                border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 py-3 h-[500px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="my-2">
                                <span class="mr-2 font-semibold">클린룸</span>
                                <span class="text-[0.9rem] text-primary">흡착탑</span>
                            </div>
                            <div class="flex items-center">
                                <span class="text-[0.8rem] text-gray-500 mr-2">가동상태</span>

                                <div
                                    class="bg-[#E7F8F3] text-[#11B886] text-[0.8rem] font-bold rounded-[16px] px-3 py-1">
                                    정상
                                </div>
                            </div>
                            <div class="w-[180px] flex flex-col items-center border-solid border-2 bg-[#F8F8F8]
                            border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 py-3 my-3">
                                <div class="flex items-center text-[10px]">
                                    <div class="rounded-full w-[8px] h-[8px] bg-[#ef4770] mr-1 "></div>
                                    <span>
                                        정지시간
                                    </span>
                                    <div class="mx-2"></div>
                                    <div class="rounded-full w-[8px] h-[8px] bg-[#11B886] mr-1 "></div>
                                    <span>가동시간</span>
                                </div>
                                <BehaviorStatusChart />

                                <div class="mt-2">
                                    가동률: <span class="font-semibold">64%</span>
                                </div>
                            </div>
                        </div>
                        <img class="w-[30%] min-w-[150px]" src="/assets/icon/ac_tower.png" />
                        <div>

                            <button v-for="(item, index) in operationList" :key="index"
                                class="text-white w-full bg-gray-300 rounded-full text-[0.9rem] py-3 max-w-[400px] my-2"
                                :class="index === 0 ? 'bg-primary' : ''">{{ item.name }}</button>
                        </div>
                    </div>

                </div>


            </div>

            <div class="flex xl:w-1/2">
                <div class="w-2/4 flex flex-col border-solid border-2
                    border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 py-3">
                    <span class="mr-2 font-semibold">가동 종합 현황</span>

                    <div class="flex items-center">
                        <span class="text-black text-[1.4rem] mr-2 font-semibold">123,123 khw</span>
                        <div class="bg-[#E7F8F3] text-[#11B886] text-[0.8rem] font-bold rounded-[16px] px-3 py-1">
                            +4.67%
                        </div>
                    </div>
                    <span class="text-[0.9rem] text-gray-500">누적 사용 전력</span>
                    <div class="h-full flex flex-col justify-center">
                        <div class="flex justify-between my-2">
                            <div class="flex">
                                <img class="mr-2" src="/assets/icon/Avatar.svg" />
                                <div class="flex flex-col">
                                    <span class="text-[0.9rem]">금일 사용량</span>
                                    <span class="text-[0.8rem] text-gray-500">500 ships</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <div class="text-[0.9rem] font-bold">503,68,258</div>
                                <div class="text-[0.8rem] text-gray-500">kwh</div>
                            </div>
                        </div>

                        <div class="flex justify-between my-2">
                            <div class="flex">
                                <img class="mr-2" src="/assets/icon/Avatar-1.svg" />
                                <div class="flex flex-col">
                                    <span class="text-[0.9rem]">전일 사용량</span>
                                    <span class="text-[0.8rem] text-gray-500">25 planes</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <div class="text-[0.9rem] font-bold">23,36,569</div>
                                <div class="text-[0.8rem] text-gray-500">Tons</div>
                            </div>
                        </div>

                        <div class="flex justify-between my-2">
                            <div class="flex">
                                <img class="mr-2" src="/assets/icon/Avatar-2.svg" />
                                <div class="flex flex-col">
                                    <span class="text-[0.9rem]">온실가스 배출량</span>
                                    <span class="text-[0.8rem] text-gray-500">2500 Trucks</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <div class="text-[0.9rem] font-bold">365,66,547</div>
                                <div class="text-[0.8rem] text-gray-500">Tons</div>
                            </div>
                        </div>

                        <div class="flex justify-between my-2">
                            <div class="flex">
                                <img class="mr-2" src="/assets/icon/Avatar-3.svg" />
                                <div class="flex flex-col">
                                    <span class="text-[0.9rem]">오염물 처리량</span>
                                    <span class="text-[0.8rem] text-gray-500">1000 Trains</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <div class="text-[0.9rem] font-bold">102,36,482</div>
                                <div class="text-[0.8rem] text-gray-500">Tons</div>
                            </div>
                        </div>

                        <div class="flex justify-between my-2">
                            <div class="flex">
                                <img class="mr-2" src="/assets/icon/Avatar-4.svg" />
                                <div class="flex flex-col">
                                    <span class="text-[0.9rem]">기타</span>
                                    <span class="text-[0.8rem] text-gray-500">1175 ships</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <div class="text-[0.9rem] font-bold">120,58,147</div>
                                <div class="text-[0.8rem] text-gray-500">Tons</div>
                            </div>
                        </div>

                    </div>




                </div>

                <div class="w-2/4 flex flex-col">
                    <div class=" flex flex-col border-solid border-2
                        border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 py-3 h-[200px]">
                        <span class="mr-2 font-semibold">가동 누적 시간</span>
                        <span class="mb-[50px]">24 H</span>
                        <ProgressBar barWidth="200" :percentage="50" barColor="#6950e8" backgroundColor="#e5e7eb" />
                        <span class="ml-auto text-[0.8rem] text-gray-500">24H/60H</span>
                    </div>
                    <div class=" flex flex-col border-solid border-2
                        border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 py-3 h-[350px]">
                        <span class="mr-2 font-semibold mb-4">설비 가동 시간</span>
                        <div class="flex flex-col items-center justify-center h-full">
                            <div class="w-[100%] flex justify-center">
                                <OperationTimeChart />
                            </div>

                            <div class="flex items-center mt-4">
                                <div class="rounded-full w-[8px] h-[8px] bg-primary mr-1 "></div>
                                <span>
                                    금일 가동시간
                                </span>
                                <div class="mx-2"></div>
                                <div class="rounded-full w-[8px] h-[8px] bg-[#6B7280] mr-1 "></div>
                                <span>평균 가동시간</span>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>



        <div class="flex">
            <div class="flex w-2/3">
                <div class="w-full flex flex-col border-solid border-2 
                border-gray-200 px-[20px] rounded-[16px] hover:bg-gray-200 pt-3">
                    <div class="flex justify-between py-2">
                        <h3 class="text-[1rem] font-semibold">에너지 사용량 추이</h3>
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
                    <h3 class="text-[1rem] font-semibold">설비 이벤트 목록</h3>
                    <img class="w-[16px] h-[16px]" src="/assets/icon/more.svg" />
                </div>
                <div class="h-full flex flex-col justify-center">
                    <div class="flex justify-between py-2">
                        <div class="flex flex-col">
                            <span class="text-[1rem] font-semibold">흡착탑 1</span>
                            <span class="text-[0.8rem] text-gray-600">기능 고장</span>
                        </div>
                        <img src="/assets/icon/next.svg" />
                    </div>

                    <div class="flex justify-between py-2">
                        <div class="flex flex-col">
                            <span class="text-[1rem] font-semibold">흡착탑 2</span>
                            <span class="text-[0.9rem] text-gray-600">기능 고장</span>
                        </div>
                        <img src="/assets/icon/next.svg" />
                    </div>

                    <div class="flex justify-between py-2">
                        <div class="flex flex-col">
                            <span class="text-[1rem] font-semibold">흡착탑 3</span>
                            <span class="text-[0.9rem] text-gray-600">기능 고장</span>
                        </div>
                        <img src="/assets/icon/next.svg" />
                    </div>

                    <div class="flex justify-between py-2">
                        <div class="flex flex-col">
                            <span class="text-[1rem] font-semibold">흡착탑 4</span>
                            <span class="text-[0.9rem] text-gray-600">기능 고장</span>
                        </div>
                        <img src="/assets/icon/next.svg" />
                    </div>

                </div>


            </div>



        </div>





        <!-- <VViewer /> -->

    </body>
</template>

<script lang="ts">

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
            menuList,
            workList,
            operationList
        };
    },
    components: { Spacer, TitleBox, VViewer, Layout, KanbanBoard, EnergyUsageDayChart, BehaviorStatusChart, ProcessEnergyUsageChart, EnergyDevelopmentChart, SelectBox, ProgressBar, OperationTimeChart }

};
</script>