<template>

    <header :style="`grid-template-columns: ${gridCssString}; `" class="grid py-2 gap-4">
        <div v-for="(data, index) in headerData" :key="index" v-html="data" class="flex justify-center"></div>

    </header>

    <main :style="`display: grid; grid-template-columns: ${gridCssString};`"
        class="text-center rounded-md border-x-[1px] border-gray gap-4">

        <div v-for="(data, index) in bodyData" :key="index"
            class="py-4 border-b-[1px] border-t-[1px] border-gray flex justify-center items-center rounded-md"
            v-html="data">
        </div>

    </main>
    <footer :class="`flex  py-2 justify-center`">
        <Pagination />

    </footer>
</template>

<script lang="ts" setup>
import Pagination from "@/components/Pagination"
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
