<template>
  <div class="defineExpose">
    <h1>DefineExpose</h1>
    <h1>父組件</h1>
    <p>money:{{money}}</p>
    <button @click="handleClick">和子組件借10塊</button>
    <child ref="sonA"></child>
  </div>
</template>

<script setup>
/* 功能
父組件取得子組件參數及方法
---> 父組件使用ref 子組件使用defineExpose
*/
import { ref } from 'vue';
import child from './childRef.vue';

const title = ref('')
const sonA = ref()
const money = ref(1000)

function handleClick(){
  money.value+=10
  sonA.value.minusTenDollars()
}
</script>

<style scoped>

</style>
