<template>

    <header :style="`grid-template-columns: ${gridCssString}; `" class="grid py-2 gap-4 bg-[#F3F4F6]">
        <div v-for="(data, index) in headerData" :key="index" v-html="data" class="flex justify-center"></div>

    </header>

    <main :style="`display: grid; grid-template-columns: ${gridCssString};`"
        class="text-center rounded-md border-x-[1px] border-gray gap-4 pt-6 pb-4">
        <slot></slot>

    </main>
    <footer :class="`flex  py-2 absolute bottom-4 left-[50%]`">
        <Pagination />

    </footer>
</template>

<script lang="ts" setup>
import Pagination from "@/components/Pagination.vue"
const props = defineProps({
    headerData: Array<HTMLElement>,
    bodyData: Array<HTMLElement>
})


const leftSideBarWidth = '260px'



let gridCssString = '';

props.headerData?.map(data => {
    gridCssString += '1fr '
})



</script>
<style scoped></style>
