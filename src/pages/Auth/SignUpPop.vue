<template>
    <PopupContainer v-show="props.show === true">
        <div class="w-[360px] bg-white rounded-md text-[0.9rem]">
            <header class="border-[1px] border-b-[#6950E8] py-2 rounded-md flex justify-between px-3">
                <span></span>
                <span class="font-bold">회원가입</span>
                <button @click="setShow(false)" class="text-[0.9rem] text-[#6950E8]">X</button>
            </header>
            <main class="px-3 pt-3 pb-2">

                <div class="flex py-3">
                    <span class="w-[70px] font-bold">아이디</span>
                    <input class="rounded-lg border-[1px] border-gray mr-3 pl-2 text-[0.8rem]" type="text" />
                    <button class="bg-[#11B886] text-white rounded-md px-1 text-[0.7rem]">중복확인</button>
                </div>

                <div class="flex py-3">
                    <span class="w-[70px] font-bold">비밀번호</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem]" type="password" />

                </div>

                <div class="flex py-3">
                    <span class="w-[70px] font-bold">이름</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem]" type="text" />

                </div>

                <div class="flex py-3">
                    <span class="w-[70px] font-bold">업체명</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem]" type="text" />

                </div>

                <div class="flex py-3">
                    <span class="w-[70px] font-bold">연락처</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem]" placeholder="- 제외 입력"
                        type="phone" />

                </div>

                <div class="flex py-3 items-center">
                    <span class="w-[70px] font-bold">E-mail</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem] w-[100px]" type="text" />
                    <span>@</span>
                    <input class="rounded-lg border-[1px] border-gray mx-2 pl-2 text-[0.8rem] w-[120px]" type="text" />

                </div>

                <div class="flex py-3">
                    <span class="w-[70px] font-bold">주소</span>
                    <input class="rounded-lg border-[1px] border-gray mr-2 pl-2 text-[0.8rem] w-[250px]" type="phone" />

                </div>


            </main>
            <footer class="pb-6 flex justify-center">
                <button class="bg-[#9CA3AF] text-white rounded-lg text-[0.9rem] font-bold px-2">회원가입</button>
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