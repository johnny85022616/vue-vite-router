<template>
  <div class="product">
    <p>{{productDetail}}</p>
    <button @click="changeprd">changePrd</button>
    <button @click="changeIntro">changeIntro</button>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"

  const count = ref(0)
  defineProps({
    productDetail:{
      type: Object,
      default(){
        return {}
      } 
    }
  })

  const emit = defineEmits(['setProduct','setIntro'])

  function changeIntro(){
    emit('setIntro', `被修改${count.value += 1}次`)
  }

  function changeprd(){
    emit('setProduct',{a:1 , b:2})
  }
  

</script>

<style scoped>

</style>
