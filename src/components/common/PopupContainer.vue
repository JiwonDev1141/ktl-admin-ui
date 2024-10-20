<template>

    <body style="background-color: rgba(0,0,0,0.3);"
        class="fixed bg-gray-800 w-screen h-screen flex flex-col justify-center items-center z-[100]">
        <slot />
    </body>
</template>

<script setup>
defineProps({
    show: Boolean,
    setShow: Function,
    zIndex: {
        default: 100,
        type: Number || String
    }
})
</script>