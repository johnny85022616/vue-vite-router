<template>
  <div class="componentVmodel">
    <h1>component v-model</h1>
    <customInput v-model="inputVal"/>
    <p>input值: {{inputVal}}</p>
    <customerDom v-model="point"/>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
import customInput from './customInput.vue';
import customerDom from './customerDom.vue';

  const inputVal = ref('')
  const point = ref(0)

  function updatePoint(plusPoint){
    point.value += plusPoint
  }
</script>

<style scoped>

</style>
