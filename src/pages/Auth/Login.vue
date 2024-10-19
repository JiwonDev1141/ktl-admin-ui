<template>
    <SignUpPop :show="state.showLoginPop" :setShow="setShowLoginPop" />
    <FindPWPop :show="state.showFindPWPop" :setShow="setShowFindPWPop" />
    <div class="flex flex-col h-screen md:flex-row">
        <!-- 왼쪽 화면 영역 start -->
        <div class=" bg-primary text-white flex justify-center items-center h-2/6 md:w-screen md:h-full">
            <div class="flex flex-col pl-4">
                <h3 class="text-[2rem] font-semibold">한국산업기술시험원</h3>
                <div class="p-[20px]"></div>
                <span class="text-[1.2rem] font-semibold">You are in a good company</span>
                <div class="p-[5px]"></div>

                <span class="text-[0.9rem] font-normal leading-[24px]">
                    A product is something a brand is something that
                    is
                    bought
                    by the
                    customer.
                </span>

                <div class="grid grid-cols-3 w-2/3">
                    <img class="pt-3 w-[70px]" v-for="(logoSrc, index) in logoList" :key="index" :src="logoSrc" />
                </div>
            </div>

        </div>
        <!-- 왼쪽 화면 영역 end -->

        <!-- 오른쪽 화면 영역 start -->
        <div class="flex justify-center items-center md:w-screen h-1/2 md:h-full">
            <div class="flex flex-col justify-start md:w-4/6 lg:w-3/6">
                <h3 class="text-[2rem] font-medium tracking-tighter">로그인</h3>
                <div class="flex items-center mb-3">
                    <span @click="setShowLoginPop(true)"
                        class="text-[0.9rem] font-normal text-primary cursor-pointer">회원가입</span>
                    <span class="mx-2">/</span>
                    <span @click="setShowFindPWPop(true)"
                        class="text-[0.9rem] font-normal text-primary cursor-pointer">비밀번호 찾기</span>
                </div>

                <div class="flex">
                    <CheckMenu :checked="state.selectedUserRole === 'USER'" @click="state.selectedUserRole = 'USER'"
                        class="mr-2" name="사용자" color="primary" />
                    <CheckMenu :checked="state.selectedUserRole === 'ADMIN'" @click="state.selectedUserRole = 'ADMIN'"
                        name="관리자" color="primary" />
                </div>

                <Spacer height="1rem" />

                <span class="font-bold text-[1.2rem]">Please enter your ID password</span>

                <Spacer height="1rem" />
                <form style="max-width: 400px;" @submit.prevent="">

                    <FormInput placeholder="아이디" />
                    <Spacer height="1rem" />



                    <PasswordInput :apply-hide-btn="true" placeholder="비밀번호" />
                    <Spacer height="1rem" />

                    <button @click="handleLogin()" class=" text-white w-full bg-primary rounded-md text-[0.9rem] py-3">

                        <span class="hover:animate-ping">
                            로그인

                        </span>
                    </button>
                </form>
            </div>
        </div>
        <!-- 오른쪽 화면 영역 end -->


    </div>
</template>

<script lang="ts">
import KanbanBoard from "@/components/KanbanBoard.vue";
import AppButton from "@/components/AppButton.vue";
import CheckMenu from "@/components/CheckMenu.vue";
import Spacer from "@/components/Spacer.vue";
import FormInput from "@/components/FormInput.vue";
import PasswordInput from "@/components/PasswordInput.vue"
import CodeMirror from "@/components/common/CodeMirror.vue"
import SignUpPop from "./SignUpPop.vue";
import FindPWPop from "./FindPWPop.vue";

import router from "@/router";
import { reactive } from "vue";
export default {


    setup() {

        const logoList = [
            "/assets/image/amazon.svg",
            "/assets/image/godaddy.svg",
            "/assets/image/google.svg",
            "/assets/image/adidas.svg",
            "/assets/image/dribble.svg",
            "/assets/image/yahoo.svg",

        ]

        const state = reactive({
            selectedUserRole: 'USER',
            showLoginPop: false,
            showFindPWPop: false,
        })

        function setShowLoginPop(newState: boolean) {
            state.showLoginPop = newState;
        }

        function setShowFindPWPop(newState: boolean) {
            state.showFindPWPop = newState;
        }

        const handleLogin = () => {
            if (state.selectedUserRole === 'USER') {
                window.localStorage.setItem("user_role", "USER")
                // routeToUserMonitoring()
                window.location.href = "/reservation"
            }

            if (state.selectedUserRole === 'ADMIN') {
                window.localStorage.setItem("user_role", "ADMIN")
                // routeToAdminMonitoring()
                window.location.href = "/admin/reservations"

            }
        }



        const routeToUserMonitoring = () => {
            router.push("/monitoring")
        }

        const routeToAdminMonitoring = () => {
            router.push("/admin/monitoring")
        }



        return {
            logoList,
            routeToUserMonitoring,
            routeToAdminMonitoring,
            state,
            handleLogin,
            setShowLoginPop,
            setShowFindPWPop,
        };
    },
    components: { AppButton, KanbanBoard, CheckMenu, Spacer, FormInput, PasswordInput, CodeMirror, SignUpPop, FindPWPop }

};
</script>