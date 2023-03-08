<template>
  <div class="composables">
    <h1>Composables</h1>
    <count></count>
    <productInfo v-if="product" :productDetail="product" @setProduct="setProduct" @setIntro="setIntro"/>
  </div>
</template>

<script setup>
import {useProductDetail} from './useProductDetail';
import count from './count.vue';
import productInfo from './product.vue';
import { onMounted } from 'vue';

let {product,fetchData,setProduct,setIntro} = useProductDetail(null)


onMounted(async()=>{  
  await fetchData();
  console.log(product);
  setProduct({...product.value, a:'這是打完API之後新加的屬性'})
})

</script>

<style scoped>

</style>
