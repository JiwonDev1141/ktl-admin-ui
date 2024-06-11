<template>
    <div class="fixed h-screen border-r-1 bg-gray-100 w-screen md:w-[300px] p-[20px] text-[0.9rem]">
        <svg width="30" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M30.4343 14.6159V14.6516C30.4311 15.1578 30.0179 15.6656 29.1996 16.0476L1.77493 28.9022C0.126274 29.6763 -0.483448 29.0458 0.414289 27.5024L5.43247 18.8736C6.16012 17.6143 6.5765 16.1625 6.5765 14.6159C6.5765 13.0686 6.16012 11.616 5.43247 10.3582L0.414289 1.72944C-0.483448 0.185209 0.126274 -0.445219 1.77493 0.32884L29.1996 13.1827C30.0179 13.5686 30.4311 14.074 30.4343 14.5802V14.6159Z"
                fill="#6950E8" />
            <mask id="mask0_490_2513" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="-1" width="31"
                height="16">
                <rect y="-0.350098" width="30.5" height="15" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_490_2513)">
                <path
                    d="M30.4343 14.6158V14.6515C30.4311 15.1577 30.0179 15.6655 29.1996 16.0474L1.77493 28.9021C0.126274 29.6761 -0.483448 29.0457 0.414289 27.5023L5.43247 18.8735C6.16012 17.6142 6.5765 16.1624 6.5765 14.6158C6.5765 13.0685 6.16012 11.6158 5.43247 10.3581L0.414289 1.72932C-0.483448 0.185087 0.126274 -0.445339 1.77493 0.328718L29.1996 13.1826C30.0179 13.5684 30.4311 14.0739 30.4343 14.5801V14.6158Z"
                    fill="#4317CA" />
            </g>
        </svg>

        <div class="font-semibold py-6 px-1">
            MENU
        </div>

        <div v-for="(menu, index) in menuList" :key="index">
            <div @click="() => state.activatedMenu === menu.menuTitle ? state.activatedMenu = '' : state.activatedMenu = menu.menuTitle"
                class="flex items-center justify-between text-gray-500 cursor-pointer text-[0.9rem]"
                :class="state.activatedMenu === menu.menuTitle ? 'text-primaryColor' : ''">
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
                <span>
                    <svg width="12" height="12" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.26881 4.40234L3.18361 1.04844C3.27183 0.926562 3.38688 0.875 3.50002 0.875C3.61316 0.875 3.72784 0.926281 3.81643 1.0288L6.73124 4.3827C6.91581 4.59657 6.92358 4.95247 6.74922 5.17794C6.57423 5.405 6.2817 5.41302 6.09837 5.19991L3.49998 2.19054L0.901581 5.19991C0.718217 5.41305 0.426967 5.40499 0.250736 5.17794C0.0764712 4.97422 0.0841417 4.61797 0.26881 4.40234Z"
                            fill="#6950E8" />
                    </svg>
                </span>
            </div>


            <div v-if="state.activatedMenu === menu.menuTitle">
                <div v-for="(submenu, index) in menu.submenuList" :key="index">
                    <button @click="state.activatedSubmenu = submenu.name"
                        :class="state.activatedSubmenu === submenu.name ? 'text-primaryColor bg-primaryColor-soft font-bold' : ''"
                        class="hover:text-primaryColor flex justify-between items-center my-2 py-3 px-4 rounded-full hover:bg-primaryColor-soft w-full">

                        <div class="flex items-center">
                            <EllipseIcon :is-selected="state.activatedSubmenu === submenu.name" />
                            <span class="ml-4">{{ submenu.name }}</span>
                        </div>

                        <div v-html="submenu.svg"></div>


                    </button>

                </div>

            </div>


        </div>

    </div>
</template>

<script lang="ts" setup>
import EllipseIcon from "../icons/EllipseIcon.vue";
import { reactive } from "vue";

interface menu {
    menuTitle: string;

    submenuList: Array<submenu>
}

interface submenu {
    name: string;
    svg: string | null;
}

defineProps({
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
                            </svg>`
                    }
                ]
            }
        ]
    }
})

const state = reactive({
    activatedMenu: "",
    activatedSubmenu: ""
})


</script>