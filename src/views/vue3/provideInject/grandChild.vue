<template>
  <div class="grandChild">
    <h2>孫組件</h2>
    <button @click="handleClick">祖父的money扣1000</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

  const money = inject('money')
  function handleClick(){
    money.value -= 1000
  }
</script>
<style scoped>

</style>
