<template>

    <!-- 회원가입 완료 안내 팝업 -->
    <ConfirmPop text="이메일로 임시 비밀번호를 전송하였습니다." :show="state.showConfirmPop" :setShow="setShowConfirmPop"
        :confirmCallback="() => { setShowConfirmPop(false); }" />

    <PopupContainer v-show="props.show === true">
        <div class="w-[360px] bg-white rounded-md text-[0.9rem]">
            <header class="border-[1px] border-b-[#6950E8] py-2 rounded-md flex justify-between px-3">
                <span></span>
                <span class="font-bold">비밀번호 찾기</span>
                <button @click="setShow(false)" class="text-[0.9rem] text-[#6950E8]">X</button>
            </header>
            <main class="px-5 pt-3 pb-2">




                <div class="flex py-3">
                    <span class="w-[70px] font-bold">이름</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem]" type="text" />

                </div>

                <div class="flex py-3">
                    <span class="w-[70px] font-bold">ID</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem]" type="text" />

                </div>

                <p class="text-[0.7rem] text-[#9CA3AF]">입력한 메일로 임시 비밀번호를 전송합니다.</p>
                <div class="flex py-3 items-center">
                    <span class="w-[70px] font-bold">E-mail</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem] w-[100px]" type="text" />
                    <span>@</span>
                    <input class="rounded-lg border-[1px] border-gray mx-2 pl-2 text-[0.8rem] w-[120px]" type="text" />

                </div>


            </main>
            <footer class="pb-6 flex justify-center">
                <button @click="() => { setShowConfirmPop(true); setShow(false); }"
                    class="bg-[#9CA3AF] text-white rounded-lg text-[0.8rem] font-bold px-2">회원가입</button>
            </footer>
        </div>

    </PopupContainer>

</template>

<script setup>
import { reactive } from 'vue';

import PopupContainer from "@/components/common/PopupContainer.vue"
import ConfirmPop from "@/components/ConfirmPop.vue"

import TitleBox from "@/components/TitleBox.vue"

const props = defineProps({
    show: Boolean,
    setShow: Function,
})

const state = reactive({
    showConfirmPop: false,

})

function setShowConfirmPop(newState) {
    state.showConfirmPop = newState;
}


</script>