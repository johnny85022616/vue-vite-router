<template>
  <div class="pinia">
    <h2>count: {{count}}</h2>
    <button @click="handlePlus">plus</button>
    <h2>Product</h2>
    <button @click="store.fetchApiData">product Fetch</button>
    {{product}}
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useCounterStore} from '../../../stores/counter';

const store = useCounterStore()
const {product , count } = storeToRefs(store)  //將product & count 從store解構出來 

function handlePlus(){
  store.addCount();
}



</script>

<style scoped>

</style>
