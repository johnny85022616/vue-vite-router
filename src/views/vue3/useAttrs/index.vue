<template>
  <!-- <officialInput :initValue="num" :activeBorderTag="activeBorderTag"/> -->
  <customInput :initValue="num" :activeBorderTag="activeBorderTag" :title="'input'" @click="handler"></customInput>
</template>

<script setup>
import { ref } from 'vue';
// import officialInput from './input.vue';
import customInput from './customInput.vue';

const num = ref(0)
const activeBorderTag = ref(true)

function handler(e){
  e.stopPropagation();
  console.log("click");
}

</script>
<style scoped>

</style>
