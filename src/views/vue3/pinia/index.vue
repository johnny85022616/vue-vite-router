<template>
  <div class="pinia">
    <h2>count: {{store.count}}</h2>
    <button @click="handleClick">plus</button>
  </div>
</template>

<script setup>
import {useCounterStore} from '../../../stores/counter';

const store = useCounterStore()

function handleClick(){
  store.addCount();
}



</script>

<style scoped>

</style>
