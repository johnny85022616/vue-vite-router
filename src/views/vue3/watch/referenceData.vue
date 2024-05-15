<template>
  <div class="primitiveData">
    <h2>對象型別</h2>
    <h3>姓名：{{person.name}}</h3>
    <h3>年齡：{{person.age}}</h3>
    <button @click="changeNmae"></button>
    <button @click="changeAge"></button>
  </div>
</template>

<script setup name="referenceData">
import { ref, watch } from "vue";
const person = ref({
  name: '張三',
  age: 18 ,
})

function changeNmae (){
  
}  
function changeAge (){}

</script>



<style lang="scss" scoped>


</style>