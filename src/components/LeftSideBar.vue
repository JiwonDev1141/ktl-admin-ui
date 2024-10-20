<template>
    <div class="flex flex-col justify-between fixed h-full border-r-1 bg-[#FDFdFF] w-screen sm:w-[240px] text-[14px]">

        <div class="p-[20px]">
            <img src="/assets/icon/ktl_logo.jpg" />

            <div class="font-semibold py-6 px-1">
                MENU
            </div>

            <div v-for="(menu, index) in menuList" :key="index">
                <div @click="handleMenuClick(menu)"
                    class="flex items-center justify-between text-gray-500 cursor-pointer text-[0.9rem] mx-1"
                    :class="state.activatedMenu === menu.menuTitle ? 'text-primary' : ''">
                    <button class="flex items-center">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.5 6C6.5 6.55198 6.05198 7 5.5 7H2.5C1.94777 7 1.5 6.55205 1.5 6V3C1.5 2.4477 1.9477 2 2.5 2H5.5C6.05205 2 6.5 2.44777 6.5 3V6ZM14.5 14C14.5 14.552 14.052 15 13.5 15H10.5C9.94802 15 9.5 14.552 9.5 14V11C9.5 10.448 9.94802 10 10.5 10H13.5C14.052 10 14.5 10.448 14.5 11V14Z"
                                fill="#6950E8" stroke="#6950E8" />
                            <path opacity="0.4"
                                d="M15 6.25C15 6.94063 14.4406 7.5 13.75 7.5H10.25C9.55937 7.5 9 6.94063 9 6.25V2.75C9 2.05969 9.55937 1.5 10.25 1.5H13.75C14.4406 1.5 15 2.05969 15 2.75V6.25ZM7 14.25C7 14.9406 6.44063 15.5 5.75 15.5H2.25C1.55969 15.5 1 14.9406 1 14.25V10.75C1 10.0594 1.55969 9.5 2.25 9.5H5.75C6.44063 9.5 7 10.0594 7 10.75V14.25Z"
                                fill="#6B7280" />
                        </svg>
                        <span class="ml-2 font-semibold">
                            {{ menu.menuTitle }}
                        </span>
                    </button>
                    <span :class="state.activatedMenu === menu.menuTitle ? `rotate-180` : ''">
                        <svg width="12" height="12" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.26881 4.40234L3.18361 1.04844C3.27183 0.926562 3.38688 0.875 3.50002 0.875C3.61316 0.875 3.72784 0.926281 3.81643 1.0288L6.73124 4.3827C6.91581 4.59657 6.92358 4.95247 6.74922 5.17794C6.57423 5.405 6.2817 5.41302 6.09837 5.19991L3.49998 2.19054L0.901581 5.19991C0.718217 5.41305 0.426967 5.40499 0.250736 5.17794C0.0764712 4.97422 0.0841417 4.61797 0.26881 4.40234Z"
                                fill="#6950E8" />
                        </svg>
                    </span>
                </div>


                <div v-if="state.activatedMenu === menu.menuTitle">
                    <div v-for="(submenu, index) in menu.submenuList" :key="index">
                        <button @click="handleSubmenuClick(submenu)"
                            :class="state.activatedSubmenu === submenu.name ? 'text-primary bg-primarySoft font-bold' : ''"
                            class="hover:text-primary flex justify-between items-center my-2 py-2 rounded-full hover:bg-primarySoft w-full">

                            <div class="flex items-center px-4">
                                <EllipseIcon :is-selected="state.activatedSubmenu === submenu.name" />
                                <span class="ml-4 text-[14px]">{{ submenu.name }}</span>
                            </div>

                            <!-- <div class="px-4" v-html="submenu.svg"></div> -->


                        </button>

                        <!-- 서브메뉴의 서브메뉴 start -->
                        <div v-if="state.activatedSubmenu === submenu.name && submenu.submenuList">
                            <div class="flex items-center px-8 py-2 cursor-pointer" @click="router.push(menu.routeUrl)"
                                v-for="(menu, index) in submenu.submenuList" :key="index">
                                <EllipseIcon />
                                <span class="ml-4 text-[14px]">{{
                menu.name }}</span>
                            </div>
                        </div>
                        <!-- 서브메뉴의 서브메뉴 end -->

                    </div>

                </div>


            </div>
        </div>

        <div>
            <button class="flex justify-between items-center bg-[#EEECFD] p-3 rounded-xl w-full">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.72187 0.781639C7.97593 0.678279 8.25278 0.625 8.52964 0.625C8.8065 0.625 9.05404 0.678279 9.33741 0.781639L16.1546 3.5409C16.5878 3.71655 16.8679 4.11646 16.8679 4.5625C16.8679 5.00854 16.5878 5.40845 16.1546 5.58379L9.33741 8.34312C9.05404 8.4477 8.8065 8.5 8.52964 8.5C8.25278 8.5 7.97593 8.4477 7.72187 8.34312L0.904716 5.58379C0.471975 5.40845 0.191406 5.00854 0.191406 4.5625C0.191406 4.11646 0.471975 3.71655 0.904716 3.5409L7.72187 0.781639ZM8.52964 2.10156C8.43518 2.10156 8.37004 2.11417 8.33747 2.13878L2.34958 4.5625L8.33747 6.98652C8.37004 7.01113 8.43518 7.02344 8.52964 7.02344C8.59478 7.02344 8.65992 7.01113 8.72181 6.98652L14.7084 4.5625L8.72181 2.13878C8.65992 2.11417 8.59478 2.10156 8.52964 2.10156ZM8.33747 10.924C8.37004 10.9486 8.43518 10.9609 8.52964 10.9609C8.59478 10.9609 8.65992 10.9486 8.72181 10.924L14.9136 8.41694C14.7638 8.20469 14.7345 7.92168 14.8647 7.67866C15.0602 7.3126 15.5292 7.16494 15.9135 7.34644L16.2099 7.48794C16.6138 7.67866 16.8679 8.06626 16.8679 8.49077C16.8679 8.94297 16.5845 9.34902 16.148 9.52436L9.33741 12.2806C9.05404 12.3852 8.8065 12.4375 8.52964 12.4375C8.25278 12.4375 7.97593 12.3852 7.72187 12.2806L0.934356 9.53359C0.483603 9.3521 0.191426 8.93374 0.191426 8.46924C0.191426 8.09702 0.382567 7.74634 0.704729 7.52793L1.03989 7.30029C1.39133 7.06343 1.87957 7.14033 2.13037 7.47256C2.34599 7.75864 2.31635 8.14009 2.05122 8.39233L8.33747 10.924ZM2.13037 11.4101C2.34599 11.6961 2.31635 12.0776 2.05122 12.3298L8.33747 14.8615C8.37004 14.8861 8.43518 14.8984 8.52964 14.8984C8.59478 14.8984 8.65992 14.8861 8.72181 14.8615L14.9136 12.3544C14.7638 12.1422 14.7345 11.8592 14.8647 11.6162C15.0602 11.2501 15.5292 11.1024 15.9135 11.2839L16.2099 11.4254C16.6138 11.6162 16.8679 12.0038 16.8679 12.4283C16.8679 12.8805 16.5845 13.2865 16.148 13.4619L9.33741 16.2181C9.05404 16.3227 8.8065 16.375 8.52964 16.375C8.25278 16.375 7.97593 16.3227 7.72187 16.2181L0.934356 13.4711C0.483603 13.2896 0.191439 12.8712 0.191439 12.4067C0.191439 12.0345 0.382599 11.6838 0.704729 11.4654L1.03989 11.2378C1.39133 11.0009 1.87957 11.0778 2.13037 11.4101Z"
                        fill="#6B7280" />
                </svg>

                <span class="font-bold">DT 프로그램 실행</span>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.30134 3.73434L10.794 8.48434C10.9313 8.62887 11 8.81434 11 8.99997C11 9.1855 10.9313 9.37091 10.794 9.51559L6.30134 14.2656C6.01502 14.5656 5.53812 14.5781 5.2361 14.2937C4.93195 14.0086 4.92121 13.5318 5.20667 13.2331L9.23781 8.99872L5.20667 4.76434C4.92121 4.46559 4.93188 3.99216 5.2361 3.70497C5.53812 3.42091 6.01502 3.43341 6.30134 3.73434Z"
                        fill="#6B7280" />
                </svg>

            </button>
            <div class="flex flex-col items-center justify-end mt-4">
                <div class="rounded-full p-4 bg-gray-300 w-[3rem] h-[3rem] mb-3 flex items-center justify-center">
                    <img src="/assets/icon/user.png" />
                </div>
                <span class="font-bold text-md">{{ username }}</span>
                <span>rockwonit1</span>
            </div>

            <div class="flex justify-center my-10">
                <img class="w-[24px] h-[24px] mr-[15%]" src="/assets/icon/logout.png" />
                <span @click="handleLogout" class="font-bold cursor-pointer">Logout</span>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import EllipseIcon from "../icons/EllipseIcon.vue";
import { reactive } from "vue";
import router from "@/router";

interface menu {
    menuTitle: string;

    submenuList: Array<submenu>
}

interface submenu {
    name: string;
    svg: string | null;
    routeUrl: string;
    submenuList?: Array<{ name: string, routeUrl: string }>;
}

const props = defineProps({
    menuList: {
        type: Array<menu>,
        default: [
            {
                menuTitle: 'Dashboard',

                submenuList: [
                    {
                        name: "통합 모니터링",
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.8125 3.5H21.1875C21.9124 3.5 22.5 4.18556 22.5 5.03125V9.625H20.75V5.54167H3.25V15.75H13.75V23.9167H8.0625C7.82088 23.9167 7.625 23.6881 7.625 23.4062V22.3854C7.625 22.1035 7.82088 21.875 8.0625 21.875H8.2725C8.94287 21.8824 9.55795 21.4423 9.85625 20.7419L10.25 19.8333H2.8125C2.08763 19.8333 1.5 19.1478 1.5 18.3021V5.03125C1.5 4.18556 2.08763 3.5 2.8125 3.5ZM20.75 11.6667H17.25C16.2835 11.6667 15.5 12.5807 15.5 13.7083V21.875C15.5 23.0026 16.2835 23.9167 17.25 23.9167H20.75C21.7165 23.9167 22.5 23.0026 22.5 21.875V13.7083C22.5 12.5807 21.7165 11.6667 20.75 11.6667ZM20.75 21.875H17.25V13.7083H20.75V21.875Z"
                                    fill="#6B7280" />
                            </svg>`,
                        routeUrl: '/monitoring',
                        submenuList: [
                            {
                                name: "예약목록",
                                routeUrl: '',
                            },
                            {
                                name: "예약설정",
                                routeUrl: ''
                            }
                        ]
                    }
                ],

            }
        ]
    },
    username: {
        type: String,
        default: '사용자1',
    }
})

const state = reactive({
    activatedMenu: "", // 대메뉴
    activatedSubmenu: "" // 하위메뉴
})

/**
 * 최초 기본 선택 메뉴를 첫번째 메뉴 / 서브메뉴로.
 */
const initMenuSelection = () => {
    state.activatedMenu = props.menuList[0].menuTitle
    state.activatedSubmenu = props.menuList[0].submenuList[0].name

}

initMenuSelection();

const handleMenuClick = (menu) => {

    if (state.activatedMenu === menu.menuTitle) {
        state.activatedMenu = ''
    }

    if (state.activatedMenu !== menu.menuTitle) {
        state.activatedMenu = menu.menuTitle
    }


}

const handleSubmenuClick = (submenu) => {
    state.activatedSubmenu = submenu.name
    router.push(submenu.routeUrl)
}

const handleLogout = () => {
    router.push("/auth/login")
}

</script>