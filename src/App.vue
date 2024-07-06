<template>
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet">
  <LeftSideBar v-if="state.isLoginPage === false" :menuList=menuList />
  <RouterView />
</template>
  
<script lang="ts" setup>
import { useRoute } from "vue-router"
import { reactive, watch } from 'vue'

import LeftSideBar from "./components/LeftSideBar.vue"

const state = reactive({
    isLoginPage: false
})

const route = useRoute()
watch(route, (to) => {
    console.log(to.path)
    if(to.path === '/login') {
        state.isLoginPage = true
    }
    else {
        state.isLoginPage = false
    }
}, {flush: 'pre', immediate: true, deep: true})

const menuList: Array<menu> = [
            {
                menuTitle: 'Dashboard',
                submenuList: [
                    {
                        name: "통합 모니터링",
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.8125 3.5H21.1875C21.9124 3.5 22.5 4.18556 22.5 5.03125V9.625H20.75V5.54167H3.25V15.75H13.75V23.9167H8.0625C7.82088 23.9167 7.625 23.6881 7.625 23.4062V22.3854C7.625 22.1035 7.82088 21.875 8.0625 21.875H8.2725C8.94287 21.8824 9.55795 21.4423 9.85625 20.7419L10.25 19.8333H2.8125C2.08763 19.8333 1.5 19.1478 1.5 18.3021V5.03125C1.5 4.18556 2.08763 3.5 2.8125 3.5ZM20.75 11.6667H17.25C16.2835 11.6667 15.5 12.5807 15.5 13.7083V21.875C15.5 23.0026 16.2835 23.9167 17.25 23.9167H20.75C21.7165 23.9167 22.5 23.0026 22.5 21.875V13.7083C22.5 12.5807 21.7165 11.6667 20.75 11.6667ZM20.75 21.875H17.25V13.7083H20.75V21.875Z"
                                    fill="#6B7280" />
                            </svg>`,
                        routeUrl: '/monitoring'
                    },
                    {
                        name: "설비 관리",
                        svg: null,
                        routeUrl: "/facility-management"
                    },
                  
                ]
            },

        ]


</script>
<style>
#app {
    font-family: Inter;
}
</style>