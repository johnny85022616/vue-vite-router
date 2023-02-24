<template>
  <div class="composables">
    <h1>Composables</h1>
    <p>count:{{count}}</p>
    <button @click="plus">+1</button>
    <h2>productDetail</h2>
    <p v-if="state.productDetail">{{state.productDetail}}</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import {useCount} from './useCount';
import {useProductDetail} from './useProductDetail';
let {count , setCount} = useCount(0)
let {state,fetchData} = useProductDetail(null)

onMounted(()=>{
  fetchData();
})


function plus(){
  setCount(count.value += 1)
}
</script>

<style scoped>

</style>
