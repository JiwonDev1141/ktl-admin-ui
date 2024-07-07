
<template>
    <div class="">
        <div @click="toggleMenuList" 
        class="flex items-center justify-between text-[0.8rem] border-[1px] border-primary rounded-md px-[20px] py-[10px] cursor-pointer"
            :style="`width: ${width}`"
        >
            <span>|</span>
            <span>{{ state.selectedMenu?.name }}</span>
            <span :class="`${state.showMenuList ? '' : 'rotate-180'}`">
                <svg width="12" height="12" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.26881 4.40234L3.18361 1.04844C3.27183 0.926562 3.38688 0.875 3.50002 0.875C3.61316 0.875 3.72784 0.926281 3.81643 1.0288L6.73124 4.3827C6.91581 4.59657 6.92358 4.95247 6.74922 5.17794C6.57423 5.405 6.2817 5.41302 6.09837 5.19991L3.49998 2.19054L0.901581 5.19991C0.718217 5.41305 0.426967 5.40499 0.250736 5.17794C0.0764712 4.97422 0.0841417 4.61797 0.26881 4.40234Z"
                        fill="#6950E8" />
                </svg>
            </span>
        </div>
         <ul v-if="state.showMenuList" class="text-[0.8rem] border-[1px] bg-white shadow-lg rounded-md  px-[10px] py-[10px] absolute z-10 cursor-pointer" :style="`width: calc(${width});`">
    
                <li @click="handleSelectMenu(menu)" v-for="(menu, index) in menuList" :key="index" :value="menu.value" class="cursor-pointer hover:bg-[#ececec] py-1 text-center rounded-md" :class="`${state.selectedMenu?.name === menu.name ? 'font-bold bg-[#e2e3e5]' : ''}`">{{ menu.name }}</li>
        </ul>
    </div>


</template>
<script lang="ts" setup>
import { reactive } from 'vue'

interface menuList {
    name: string;
    value: string;
}

const props = defineProps({
    width: {
        default: "200px",
        type: String
    },
    callback: {
        type: Function,
        default: () => {}
    },
    menuList: {
        default: [
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
        ],
        type: Array<menuList>
    }
})

const toggleMenuList = () => {
    state.showMenuList = !state.showMenuList
}

const handleSelectMenu = (selectedMenu) => {
    state.showMenuList = false;
    state.selectedMenu = selectedMenu

    console.log(selectedMenu)

    props.callback(selectedMenu)
}


const state = reactive({
    showMenuList: false,
    selectedMenu: props.menuList[0]
})


</script>