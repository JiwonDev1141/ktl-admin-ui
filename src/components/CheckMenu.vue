<template>
    <div @click="state.isChecked = !state.isChecked" class="flex items-center cursor-pointer">
        <input :checked="state.isChecked" :style="`accent-color: ${color}`" class="mr-2" type="checkbox" />
        <span :class="`text-[0.9rem]`" :style="state.isChecked ? `color: ${color}` : null">{{ name }}</span>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

defineProps({
    color: String,
    name: String,
})

const state = reactive({
    isChecked: false
})

</script>
<style scoped>
/* input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 2rem;
    padding: 0.1rem;
    border: 0.25rem solid green;
    border-radius: 0.5rem;
    cursor: pointer;
}

input[type="checkbox"]::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    transform: scale(0);
    background-color: green;
}

input[type="checkbox"]:checked::before {
    transform: scale(1);
}
 
input[type="checkbox"]:hover {
    color: black;
} */
</style>