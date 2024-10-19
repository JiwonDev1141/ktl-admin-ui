<template>

    <header style="grid-template-columns: 1fr 1fr 1fr 1fr 1fr;" class="grid bg-[#F3F4F6] py-2 text-center">
        <div v-for="(data, index) in headerData" :key="index">{{ data }}</div>

    </header>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr;" class="text-center">
        <span v-for="(data, index) in bodyData" :key="index" class="py-4 border-b-[1px] border-gray">{{ data }}</span>

    </div>
    <footer class="flex justify-center py-2">
        <Pagination />
    </footer>
</template>

<script lang="ts" setup>
import Pagination from "@/components/Pagination"
defineProps({
    headerData: Array<String>,
    bodyData: Array<String>
})


</script>
<style scoped></style>
