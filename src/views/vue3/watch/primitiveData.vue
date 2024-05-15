<template>
  <div class="primitiveData">
    <h2>一般型別</h2>
    <h3>{{count}}</h3>
    <button @click="plus">+1</button>
  </div>
</template>

<script setup name="primitiveData">
import { ref, watch } from "vue";

  const count = ref(0)
  
  function plus(){
    count.value +=1
  }
  //一般使用
  // watch(count ,(newVal, oldVal)=>{
  //   console.log(newVal , oldVal);
  // })
  //條件使用
  const watchFn = watch(count ,(newVal, oldVal)=>{
    console.log(newVal , oldVal);
    if(newVal >= 10 ){
      watchFn() //重新呼叫會停止監視
    }
  })
</script>

<style lang="scss" scoped>

</style>