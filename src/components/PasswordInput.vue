<template>
    <div>
        <input :type="state.hidePassword ? 'password' : 'text'"
            class="w-full p-3 rounded-md border-solid border-2 border-gray-200 text-sm" :placeholder="placeholder" />
        <div @click="state.hidePassword = !state.hidePassword"
            style="height: 0; width: 0; position: relative; margin-left: auto; right: 24px; bottom: 30px; cursor: pointer;">
            <svg v-if="applyHideBtn == true" style="z-index: 1;" xmlns="http://www.w3.org/2000/svg" width="14"
                height="12" viewBox="0 0 14 12" fill="none">
                <path
                    d="M5.44411 6.00001C6.30218 6.00001 6.99981 5.27123 6.99981 4.37486C6.99981 4.08284 6.90501 3.8086 6.79562 3.57244C6.86369 3.56483 6.93175 3.56229 6.99981 3.56229C8.28812 3.56229 9.33336 4.63133 9.33336 6.00001C9.33336 7.34584 8.28812 8.43774 6.99981 8.43774C5.68962 8.43774 4.66626 7.34584 4.66626 6.00001C4.66626 5.92891 4.66869 5.85781 4.67598 5.78671C4.90205 5.90098 5.16457 6.00001 5.44411 6.00001Z"
                    fill="#6B7280" />
                <path :opacity="state.hidePassword ? 0.4 : 1"
                    d="M2.31872 2.35866C3.46313 1.24746 5.03585 0.311981 6.99992 0.311981C8.96399 0.311981 10.5367 1.24746 11.6816 2.35866C12.8192 3.46071 13.58 4.75829 13.9398 5.68767C14.02 5.88828 14.02 6.11174 13.9398 6.31234C13.58 7.21887 12.8192 8.51645 11.6816 9.64136C10.5367 10.7536 8.96399 11.688 6.99992 11.688C5.03585 11.688 3.46313 10.7536 2.31872 9.64136C1.18112 8.51645 0.420768 7.21887 0.0590921 6.31234C-0.0206739 6.11174 -0.0206739 5.88828 0.0590921 5.68767C0.420768 4.75829 1.18112 3.46071 2.31872 2.35866ZM6.99992 9.6566C8.93239 9.6566 10.5002 8.01875 10.5002 6.00001C10.5002 3.98127 8.93239 2.34342 6.99992 2.34342C5.06745 2.34342 3.49959 3.98127 3.49959 6.00001C3.49959 8.01875 5.06745 9.6566 6.99992 9.6566Z"
                    fill="#6B7280" />
            </svg>

        </div>

    </div>

</template>

<script lang="ts" setup>
import { reactive } from "vue"
defineProps({
    placeholder: String,
    applyHideBtn: Boolean
})

const state = reactive({
    hidePassword: false
})
</script>