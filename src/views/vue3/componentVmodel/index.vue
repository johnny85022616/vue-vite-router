<template>
  <div class="componentVmodel">
    <h1>component v-model</h1>
    <customInput v-model="inputVal"/>
    <p>input值: {{inputVal}}</p>
    <customerDom :modelPoint="modelPoint" @update:modelPoint="updatePoint"/>
    <!-- <customerDom v-model="modelPoint"/> -->
    <p>point值: {{modelPoint}}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
import customInput from './customInput.vue';
import customerDom from './customerDom.vue';

  const inputVal = ref('')
  const modelPoint = ref(0)

  function updatePoint(plusPoint){
    modelPoint.value = plusPoint
  }
</script>

<style scoped>

</style>
