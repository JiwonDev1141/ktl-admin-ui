<template>
  <button type="button" class="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" :class="{
    'text-white bg-blue-700 hover:bg-blue-800': !outlined,
    'border border-gray-200 hover:bg-gray-100': outlined
  }">
    {{ text }}
  </button>
</template>
  
<script lang="ts" setup>
defineProps({
  outlined: Boolean,
  text: String,
})
</script>
  