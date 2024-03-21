<template>
  <div class="child">
    <h2>子組件Ａ</h2>
    <p>count:{{money}}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

  const money = ref(10000)

  function minusTenDollars(){
    money.value -= 10
  }

  //expose 給父類別使用
  defineExpose({
    money,
    minusTenDollars
  });

</script>

<style scoped>

</style>
