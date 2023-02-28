<template>
  <div class="product">
    <p>{{productDetail}}</p>
    <button @click="changeprd">changePrd</button>
  </div>
</template>

<script setup>
  defineProps({
    productDetail:{
      type: Object,
      default(){
        return {}
      } 
    }
  })

  const emit = defineEmits(['setProduct'])

  function changeprd(){
    emit('setProduct',{a:1 , b:2})
  }
  

</script>

<style scoped>

</style>
