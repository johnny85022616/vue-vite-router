<template>
  <div class="defineExpose">
    <h1>$parent</h1>
    <h1>父組件</h1>
    <p>money:{{money}}</p>
    <child></child>
  </div>
</template>

<script setup>
/* 功能
子組件取得父組件參數及方法
---> 父組件defineExpose 子組件$parent
*/
import { ref } from 'vue';
import child from './child.vue';

const money = ref(1000)
defineExpose({
  money
})
</script>

<style scoped>

</style>
