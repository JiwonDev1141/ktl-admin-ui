<template>
    <CodeMirror />
    <div class="flex flex-col h-screen md:flex-row">
        <!-- 왼쪽 화면 영역 start -->
        <div class=" bg-primaryColor text-white flex justify-center items-center h-2/6 md:w-screen md:h-full">
            <div class="flex flex-col pl-4">
                <h3 class="text-[2rem] font-semibold">스마트 생태공장</h3>
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
                    <img class="pt-5" v-for="(logoSrc, index) in logoList" :key="index" :src="logoSrc" />
                </div>
            </div>

        </div>
        <!-- 왼쪽 화면 영역 end -->

        <!-- 오른쪽 화면 영역 start -->
        <div class="flex justify-center items-center md:w-screen h-1/2 md:h-full">
            <div class="flex flex-col justify-start md:w-4/6 lg:w-3/6">
                <h3 class="text-[2rem] font-medium tracking-tighter">로그인</h3>
                <span class="text-[0.9rem] font-normal text-primaryColor mb-3 cursor-pointer">회원가입</span>

                <div class="flex">
                    <CheckMenu class="mr-2" name="사용자" color="#6950E8" />
                    <CheckMenu name="관리자" color="#6950E8" />
                </div>

                <Spacer height="1rem" />

                <span class="font-bold text-[1.2rem]">Please enter your ID password</span>

                <Spacer height="1rem" />
                <form style="max-width: 400px;" @submit.prevent="">

                    <FormInput placeholder="Enter your work email" />
                    <Spacer height="1rem" />



                    <PasswordInput :apply-hide-btn="true" placeholder="Password" />
                    <Spacer height="1rem" />

                    <button class=" text-white w-full bg-primaryColor rounded-md text-[0.9rem] py-3">

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
import KanbanBoard from "../components/KanbanBoard.vue";
import AppButton from "../components/AppButton.vue";
import CheckMenu from "../components/CheckMenu.vue";
import Spacer from "../components/Spacer.vue";
import FormInput from "../components/FormInput.vue";
import PasswordInput from "../components/PasswordInput.vue"
import CodeMirror from "../components/common/CodeMirror.vue"
export default {


    setup() {

        const logoList = [
            "/assets/image/amazon.svg",
            "/assets/image/dribble.svg",
            "/assets/image/godaddy.svg",
            "/assets/image/google.svg",
            "/assets/image/yahoo.svg",
            "/assets/image/adidas.svg",

        ]



        return {
            logoList
        };
    },
    components: { AppButton, KanbanBoard, CheckMenu, Spacer, FormInput, PasswordInput, CodeMirror }

};
</script>