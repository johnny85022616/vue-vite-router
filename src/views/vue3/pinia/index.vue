<template>
  <div class="pinia">
    <h2>count: {{counterStore.count}}</h2>
    <button @click="handlePlus">plus</button>
    <h2>Product</h2>
    <button @click="counterStore.fetchApiData">product Fetch</button>
    {{counterStore.product}}
    <h2>name: {{infoStore.name}}</h2>
    <h2>age: {{infoStore.age}}</h2>
    <button @click="handleAddAge">加5歲</button>
    <h2>salary: {{infoStore.fotmatDollars}}</h2>
    <child></child>
  </div>
</template>

<script setup>
import child from './child.vue';
import { storeToRefs } from 'pinia';
import {useCounterStore} from '../../../stores/counter';
import {useInfoStore} from '../../../stores/info';

const counterStore = useCounterStore() //組合式寫法
const infoStore = useInfoStore() //選擇式寫法
// const {product , count } = storeToRefs(store)  //將product & count 從store解構出來 


function handlePlus(){
  counterStore.addCount();
}

function handleAddAge(){
  console.log(infoStore);
  infoStore.addAge(5);
}


</script>

<style scoped>

</style>
