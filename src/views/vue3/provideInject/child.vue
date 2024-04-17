<template>
  <div class="child">
    <h2>子組件</h2>
    <grandChild></grandChild>
  </div>
</template>

<script setup>
import { inject } from "vue";
import grandChild from './grandChild.vue';

  const money = inject('money')
  console.log(money.value);
</script>

<style scoped>

</style>
