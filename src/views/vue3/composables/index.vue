<template>
  <div class="composables">
    <h1>Composables</h1>
    <productInfo v-if="product" :productDetail="product" @setProduct="setProduct"/>
  </div>
</template>

<script setup>
import {useProductDetail} from './useProductDetail';
import productInfo from './product.vue';

let {product,setProduct} = useProductDetail(null)


</script>

<style scoped>

</style>
