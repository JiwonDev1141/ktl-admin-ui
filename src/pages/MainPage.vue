<template>
  <AppButton :outlined='true' text="Sample App Button" />
  <KanbanBoard title="작업 1" description="작업에 대한 설명.." :date="new Date().toLocaleDateString()" />
  <span class="text-3xl text-bold underline bg-green-200">
    Hello world!
  </span>
</template>

<script lang="ts">
import KanbanBoard from "../components/KanbanBoard.vue";
import AppButton from "../components/AppButton.vue";
import router from "../router"
export default {


  setup() {
    // alert(`현재 모드 (import.meta.env.MODE) : ${import.meta.env.MODE}`)
    router.push("/login")
    return {};
  },
  components: { AppButton, KanbanBoard }

};
</script>