<template>
  <h3>count: {{count}}</h3>
  <button @click="plus"> + 1</button>
</template>

<script setup>
  import {useCount} from './useCount.js';
  const {count , setCount} = useCount(0);

  function plus(){
    setCount(count.value+=1)
  }

</script>

<style scoped>

</style>
