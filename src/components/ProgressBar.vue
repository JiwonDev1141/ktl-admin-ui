<template>
    <!-- ToDo - px 외에 다른 단위로도 width를 지정할 수 있게 해야합니다 240624 -->
    <div class="flex">
        <div class=" rounded-md" style="height: 8px;"
            :style="`width: ${barWidth}px; background-color: ${backgroundColor};`">
        </div>
        <div style="position: relative; z-index: 1; height: 8px;" :style="`right:${barWidth}px`">
            <div class="rounded-md" style="position: absolute; height: 8px;"
                :style="`width: ${percentage * (Number(barWidth) / 100)}px; background-color: ${barColor};`">

            </div>
        </div>

    </div>

</template>
<script lang="ts" setup>
import { reactive } from "vue"
defineProps({
    barWidth: {
        defaultValue: '130px',
        type: String
    },
    percentage: {
        defaultValue: 50,
        type: Number
    },
    backgroundColor: String,
    barColor: String
})


</script>