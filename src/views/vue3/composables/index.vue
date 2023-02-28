<template>
  <div class="composables">
    <h1>Composables</h1>
    <productInfo v-if="product" :productDetail="product" @setProduct="setProduct" @setIntro="setIntro"/>
  </div>
</template>

<script setup>
import {useProductDetail} from './useProductDetail';
import productInfo from './product.vue';

let {product,setProduct,setIntro} = useProductDetail(null)


</script>

<style scoped>

</style>
