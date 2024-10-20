<template>
    <PopupContainer v-show="props.show === true">
        <div class="w-[800px] bg-white rounded-lg text-[0.8rem] px-4 pt-3">
            <header class=" py-2 rounded-md flex flex-col items-start ">
                <span class="font-black text-[1rem]">예약 수정</span>
                <button class="text-[0.8rem] text-gray-500">수정된 내용을 확인하실 수 있습니다.</button>
            </header>
            <main class="pt-3 pb-2">
                <div class="flex px-2">
                    <div class="w-1/2 pr-2">
                        <div class="font-bold">예약(시작)</div>
                        <div class="flex justify-center items-center border-[1px] border-gray rounded-md py-2">
                            --
                        </div>
                    </div>
                    <div class="w-1/2 pr-2">
                        <div class="font-bold">예약(종료)</div>
                        <div class="flex justify-center items-center border-[1px] border-gray rounded-md py-2">
                            --
                        </div>
                    </div>
                </div>

                <div class="flex my-[50px] px-2 font-bold">
                    <div class="w-1/2 pr-3">
                        <div class="mb-2">예약자 명</div>
                        <div class="flex justify-center items-center border-[1px] border-gray rounded-md py-2">
                            이종경
                        </div>
                    </div>
                    <div class="w-1/2 pl-3">
                        <div class=" mb-2">직급</div>
                        <div class="flex justify-center items-center border-[1px] border-gray rounded-md py-2">
                            수석
                        </div>
                    </div>
                </div>

                <div class="w-1/2 pr-3">
                    <div class="mb-2">업체명</div>
                    <div class="flex pl-3 text-gray-500 items-center border-[1px] border-gray rounded-md py-2">
                        녹원정보기술
                    </div>
                </div>

                <div class="flex my-[50px] px-2">
                    <div class="w-full pr-3">
                        <div class="mb-2 font-bold">장비 선택</div>
                        <div class="flex justify-between">
                            <button
                                class="w-1/5 font-bold flex justify-center items-center border-[1px] border-[#6950E8] rounded-3xl px-3 py-2">파쇄기</button>
                            <button
                                class="w-1/5 font-bold flex justify-center items-center border-[1px] border-[#6950E8] rounded-3xl px-3 py-2">분쇄기</button>
                            <button
                                class="w-1/5 font-bold flex justify-center items-center border-[1px] border-[#6950E8] rounded-3xl px-3 py-2">로터리
                                킬른</button>
                            <button
                                class="w-1/5 font-bold flex justify-center items-center border-[1px] border-[#6950E8] rounded-3xl px-3 py-2">습식추출장비</button>
                        </div>
                    </div>
                </div>

                <div class="flex my-[50px] px-2">
                    <div class="w-full pr-3">
                        <div class="mb-2 font-bold">장비이용관련 정보</div>
                        <input class="w-full flex items-center border-[1px] border-[#6950E8] rounded-md px-3 py-2"
                            placeholder="" />

                    </div>
                </div>


                <div class="flex my-[50px] px-2">
                    <div class="w-full pr-3">
                        <div class="mb-2 font-bold">기타사항</div>
                        <input class="w-full h-[100px] flex border-[1px] border-[#6950E8] rounded-md px-3 py-2"
                            placeholder="" />
                    </div>
                </div>

            </main>
            <footer class="pb-6 flex justify-end">
                <button class="w-[80px] bg-[#6950E8] text-white rounded-lg font-bold py-2 px-2 mx-2">수정하기</button>
                <button @click="props.setShow(false)"
                    class="w-[80px] bg-white text-black border-[1px] border-gray-400 rounded-lg font-bold px-2 mx-2">닫기</button>

            </footer>
        </div>

    </PopupContainer>

</template>

<script setup>
import PopupContainer from "@/components/common/PopupContainer.vue"


import TitleBox from "@/components/TitleBox.vue"

const props = defineProps({
    show: Boolean,
    setShow: Function,
})

console.log(props)




</script>