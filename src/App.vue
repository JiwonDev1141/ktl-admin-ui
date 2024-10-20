<template>
    <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet">
    <LeftSideBar v-if="state.isLoginPage === false" :menuList=menuList :username="username" />
    <RouterView />
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import { reactive, watch } from 'vue'

import LeftSideBar from "./components/LeftSideBar.vue"

const state = reactive({
    isLoginPage: false,
    userRole: 'USER'
})

const route = useRoute()
watch(route, (to) => {
    console.log(to.path)
    if (to.path === '/auth/login') {
        state.isLoginPage = true
    }
    else {
        state.isLoginPage = false
    }
}, { flush: 'pre', immediate: true, deep: true })



const menuList: Array<menu> = window.localStorage.getItem("user_role") === 'USER' ? [
    {
        menuTitle: 'Dashboard',
        submenuList: [
            {
                name: "장비 예약",
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.8125 3.5H21.1875C21.9124 3.5 22.5 4.18556 22.5 5.03125V9.625H20.75V5.54167H3.25V15.75H13.75V23.9167H8.0625C7.82088 23.9167 7.625 23.6881 7.625 23.4062V22.3854C7.625 22.1035 7.82088 21.875 8.0625 21.875H8.2725C8.94287 21.8824 9.55795 21.4423 9.85625 20.7419L10.25 19.8333H2.8125C2.08763 19.8333 1.5 19.1478 1.5 18.3021V5.03125C1.5 4.18556 2.08763 3.5 2.8125 3.5ZM20.75 11.6667H17.25C16.2835 11.6667 15.5 12.5807 15.5 13.7083V21.875C15.5 23.0026 16.2835 23.9167 17.25 23.9167H20.75C21.7165 23.9167 22.5 23.0026 22.5 21.875V13.7083C22.5 12.5807 21.7165 11.6667 20.75 11.6667ZM20.75 21.875H17.25V13.7083H20.75V21.875Z"
                                    fill="#6B7280" />
                            </svg>`,
                routeUrl: '/reservations'
            },
            {
                name: "예약내역확인",
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23" fill="none">
  <path d="M20.559 10.8672H11.5415V1.24529C11.5415 0.856617 11.7877 0.53125 12.1873 0.53125C17.1805 0.53125 21.2291 4.85081 21.2291 10.1781C21.2291 10.5657 20.9223 10.8672 20.559 10.8672ZM21.8103 12.9344C22.1817 12.9344 22.4804 13.2703 22.4319 13.6665C22.1211 16.0739 21.0313 18.2143 19.449 19.7948C19.2068 20.0016 18.8274 20.0188 18.5932 19.769L12.1873 12.9344H21.8103Z" fill="#6B7280"/>
  <path opacity="0.4" d="M0.5625 12.2451C0.5625 7.02114 4.19937 2.699 8.8817 2.00606C9.28938 1.9518 9.60423 2.2692 9.60423 2.66756V12.9342L15.9213 19.674C16.1918 19.9626 16.1716 20.4363 15.8608 20.6732C14.2785 21.8747 12.341 22.581 10.2501 22.581C4.90172 22.581 0.5625 17.9557 0.5625 12.2451Z" fill="#9CA3AF"/>
</svg>`,
                routeUrl: "/reservations/management"
            },


        ]
    },

] : [
    {
        menuTitle: 'Dashboard',
        submenuList: [
            {
                name: "예약현황",
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.8125 3.5H21.1875C21.9124 3.5 22.5 4.18556 22.5 5.03125V9.625H20.75V5.54167H3.25V15.75H13.75V23.9167H8.0625C7.82088 23.9167 7.625 23.6881 7.625 23.4062V22.3854C7.625 22.1035 7.82088 21.875 8.0625 21.875H8.2725C8.94287 21.8824 9.55795 21.4423 9.85625 20.7419L10.25 19.8333H2.8125C2.08763 19.8333 1.5 19.1478 1.5 18.3021V5.03125C1.5 4.18556 2.08763 3.5 2.8125 3.5ZM20.75 11.6667H17.25C16.2835 11.6667 15.5 12.5807 15.5 13.7083V21.875C15.5 23.0026 16.2835 23.9167 17.25 23.9167H20.75C21.7165 23.9167 22.5 23.0026 22.5 21.875V13.7083C22.5 12.5807 21.7165 11.6667 20.75 11.6667ZM20.75 21.875H17.25V13.7083H20.75V21.875Z"
                                    fill="#6B7280" />
                            </svg>`,
                routeUrl: '/admin/reservations'
            },
            {
                name: "예약관리",
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23" fill="none">
  <path d="M20.559 10.8672H11.5415V1.24529C11.5415 0.856617 11.7877 0.53125 12.1873 0.53125C17.1805 0.53125 21.2291 4.85081 21.2291 10.1781C21.2291 10.5657 20.9223 10.8672 20.559 10.8672ZM21.8103 12.9344C22.1817 12.9344 22.4804 13.2703 22.4319 13.6665C22.1211 16.0739 21.0313 18.2143 19.449 19.7948C19.2068 20.0016 18.8274 20.0188 18.5932 19.769L12.1873 12.9344H21.8103Z" fill="#6B7280"/>
  <path opacity="0.4" d="M0.5625 12.2451C0.5625 7.02114 4.19937 2.699 8.8817 2.00606C9.28938 1.9518 9.60423 2.2692 9.60423 2.66756V12.9342L15.9213 19.674C16.1918 19.9626 16.1716 20.4363 15.8608 20.6732C14.2785 21.8747 12.341 22.581 10.2501 22.581C4.90172 22.581 0.5625 17.9557 0.5625 12.2451Z" fill="#9CA3AF"/>
</svg>`,
                routeUrl: "/admin/reservations/management",
                submenuList: [
                    {
                        name: "예약목록",
                        routeUrl: '/admin/reservations/management',
                    },
                    {
                        name: "예약설정",
                        routeUrl: '/admin/reservations/setting'
                    }
                ]
            },
            {
                name: "사용자 관리",
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23" fill="none">
  <path d="M20.559 10.8672H11.5415V1.24529C11.5415 0.856617 11.7877 0.53125 12.1873 0.53125C17.1805 0.53125 21.2291 4.85081 21.2291 10.1781C21.2291 10.5657 20.9223 10.8672 20.559 10.8672ZM21.8103 12.9344C22.1817 12.9344 22.4804 13.2703 22.4319 13.6665C22.1211 16.0739 21.0313 18.2143 19.449 19.7948C19.2068 20.0016 18.8274 20.0188 18.5932 19.769L12.1873 12.9344H21.8103Z" fill="#6B7280"/>
  <path opacity="0.4" d="M0.5625 12.2451C0.5625 7.02114 4.19937 2.699 8.8817 2.00606C9.28938 1.9518 9.60423 2.2692 9.60423 2.66756V12.9342L15.9213 19.674C16.1918 19.9626 16.1716 20.4363 15.8608 20.6732C14.2785 21.8747 12.341 22.581 10.2501 22.581C4.90172 22.581 0.5625 17.9557 0.5625 12.2451Z" fill="#9CA3AF"/>
</svg>`,
                routeUrl: "/admin/users/management"
            },

        ]
    },

]

const username = window.localStorage.getItem("user_role") === 'USER' ? '사용자1' : '관리자1'


</script>
<style>
#app {
    font-family: Inter;
}
</style>