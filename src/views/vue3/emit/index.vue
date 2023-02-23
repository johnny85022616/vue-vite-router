<template>
  <div class="emit">
    <h1>Emit</h1>
    <h3>Count : {{count}}</h3>
    <child :count="count" @plus="plus"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import child from './child.vue';

  const count = ref(0)

  function plus(){
    count.value ++ 
  }
  
</script>

<style scoped>

</style>
