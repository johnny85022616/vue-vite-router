<template>
  <div class="child">
    <h1>{{title}}</h1>
    <p>count:{{count}}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

  const title = ref('Counter')
  const count = ref(0)

  function increment(){
    count.value++;
  }

  //expose 給父類別使用
  defineExpose({
    title,
    increment,
  });

</script>

<style scoped>

</style>
