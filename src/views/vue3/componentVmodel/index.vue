<template>
  <div class="componentVmodel">
    <h1>component v-model</h1>
    <customInput v-model="inputVal"/>
    <p>input值: {{inputVal}}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
import customInput from './customInput.vue';

  const inputVal = ref('')
</script>

<style scoped>

</style>
