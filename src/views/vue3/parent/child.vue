<template>
  <div class="child">
    <h2>子組件Ａ</h2>
    <p>count:{{money}}</p>
    <button @click="handleClick($parent)">和父組件要10塊錢</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

  const money = ref(10000)

  function handleClick($parent){
    console.log($parent);
    money.value +=10
    $parent.money -=10
  }
  
</script>

<style scoped>

</style>
