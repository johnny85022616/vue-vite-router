<template>
  <div class="primitiveData">
    <h2>監視reactive包裹對象型別</h2>
    <h3>姓名：{{person.name}}</h3>
    <h3>年齡：{{person.age}}</h3>
    <button @click="changeNmae">變更姓名</button>
    <button @click="changeAge">變更年齡</button>
    <button @click="changePerson">變更年齡</button>
  </div>
</template>

<script setup name="referenceData">
import { reactive, watch } from "vue";
const person = reactive({
  name: '張三',
  age: 18 ,
})
function changeNmae (){
  person.name += '~'
}  
function changeAge (){
  person.age += 1
}
function changePerson(){
  Object.assign(person , {name:'李四',age: 33})
}

//監視reactive定義的對象數據默認開啟深度監視，且是無法關閉的
watch(person , (newVal , oldVal)=>{
  console.log(newVal , oldVal);
})
</script>



<style lang="scss" scoped>


</style>