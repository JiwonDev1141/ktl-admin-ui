<template>
    <div v-show="show"
        class="absolute z-[999] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg flex flex-col items-center justify-center w-[360px] h-[160px] border-[1px] border-black">
        <strong class="text-lg mb-2 px-[15%] h-[70%] flex items-center">
            {{ text }}
        </strong>
        <div class="h-[30%]">
            <button @click="handleConfirm"
                class="rounded-lg text-white text-center bg-primary py-1 px-4 mx-2 text-[0.8rem]">확인</button>
            <button v-if="isRecheck === true" @click="setShow(false)"
                class="rounded-lg text-white text-center bg-primary py-1 px-4 mx-2 text-[0.8rem] ">닫기</button>

        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    show: Boolean,
    setShow: Function,
    isRecheck: Boolean,
    text: String,
    confirmCallback: Function
})

const handleConfirm = () => {
    props.confirmCallback!()
}
</script>