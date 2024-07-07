<template>
<body 
style="background-color: rgba(0,0,0,0.3);"
class="fixed bg-gray-800 w-screen h-screen flex flex-col justify-center items-center z-[999]">
    <slot />
</body>
</template>

<script setup>
defineProps({
    show: Boolean,
    setShow: Function
})
</script>