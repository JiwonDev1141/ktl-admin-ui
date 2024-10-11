<template>
    <div class="rounded-lg flex flex-col items-center justify-center w-[360px] h-[160px] border-[1px] border-black">
        <strong class="text-lg mb-2 px-[15%] h-[70%] flex items-center">
            {{ text }}
        </strong>
        <div class="h-[30%]">
            <button class="rounded-lg text-white text-center bg-primary py-1 px-4 mx-2 text-[0.8rem] ">닫기</button>
            <button class="rounded-lg text-white text-center bg-primary py-1 px-4 mx-2 text-[0.8rem] ">확인</button>


        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    text: String,
})
</script>