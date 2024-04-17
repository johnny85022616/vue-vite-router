<template>
  <div class="defineExpose">
    <h1>ProvideInject</h1>
    <h1>父組件</h1>
    <p>money:{{money}}</p>
    <child></child>
  </div>
</template>

<script setup>
/* 功能
  跨組件傳遞、修改訊息
*/

import { provide, ref } from 'vue';
import child from './child.vue';

const money = ref(10000)
provide("money" , money)

</script>

<style scoped>

</style>
