<template>
    <PopupContainer v-show="show === true">
        <!-- 폐기물배출 저감 박스 start -->
        <TitleBox text="폐기물배출 저감" width="1145px" :setShow="setShow" />
        <div class="w-[1145px] flex justify-center border-solid border-2 
        border-gray-200 px-[20px] cursor-pointer rounded-[16px] hover:bg-gray-200 pt-3 bg-white">


            <div class="w-[40%]">

                <div class="bg-gray-100 rounded-lg pb-4 pr-1 mr-4">

                    <div class="bg-white rounded-lg text-[0.9rem]">
                        <div class="flex flex-col px-2 py-3">
                            <span>폐기물 발생량</span>
                            <span class="font-semibold">35 T</span>
                            <div>
                                <WasteChart />
                            </div>
                        </div>

                        <div class="text-[0.9rem] px-2">
                            <div class="flex items-center justify-between py-2">
                                <span class="w-[80px] font-semibold">폐기물 1</span>
                                <div class="flex">
                                    <img class="mr-2 " src="/assets/icon/dot_3.svg" />
                                    <span>60%</span>
                                </div>
                                <span class=" w-[80px]">20 T</span>
                            </div>
                            <div class="flex items-center justify-between py-2">
                                <span class="w-[80px] font-semibold">폐기물 2</span>
                                <div class="flex">
                                    <img class="mr-2 " src="/assets/icon/dot_1.svg" />
                                    <span>10%</span>
                                </div>
                                <span class="w-[80px]">5 T</span>

                            </div>
                            <div class="flex items-center justify-between py-2">
                                <span class="w-[80px] font-semibold">폐기물 3</span>
                                <div class="flex">
                                    <img class="mr-2 " src="/assets/icon/dot_2.svg" />
                                    <span>30%</span>
                                </div>
                                <span class="w-[80px]">10 T</span>
                            </div>

                        </div>

                    </div>
                </div>





            </div>
            <div class="w-[60%] flex flex-col">
                <span class="text-gray-500 text-[20px] mr-2 font-semibold">폐기물 발생 추이</span>

                <div class="flex justify-between items-center">
                    <div class="flex">
                        <!-- <span class="mr-2 text-gray-500">This month</span>
                                <div class="bg-[#FDEDF1] text-[#EF4770] text-[12px] font-bold rounded-[16px] px-2 py-1">
                                    -2.37%</div> -->
                    </div>

                    <div class="flex">
                        <button class="mr-3">day</button>
                        <button class="mr-3">week</button>
                        <button class="mr-3">month</button>
                    </div>

                </div>
                <WasteLineChart class="h-full my-2" />

            </div>

        </div>
    </PopupContainer>

    <!-- 폐기물배출 저감 박스 end -->
</template>

<script setup>
import PopupContainer from "@/components/common/PopupContainer.vue"
import WaterInfoChart from "../charts/WaterInfoChart.vue"
import WasteChart from "../charts/WasteChart.vue";
import WasteLineChart from "../charts/WasteLineChart.vue";

import TitleBox from "@/components/TitleBox.vue"

defineProps({
    show: Boolean,
    setShow: Function,
})

</script>