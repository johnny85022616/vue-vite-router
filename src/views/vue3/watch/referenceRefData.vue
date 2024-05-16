<template>
  <div class="primitiveData">
    <h2>對象型別</h2>
    <h3>姓名：{{person.name}}</h3>
    <h3>年齡：{{person.age}}</h3>
    <button @click="changeNmae">變更姓名</button>
    <button @click="changeAge">變更年齡</button>
    <button @click="changePerson">變更年齡</button>
  </div>
</template>

<script setup name="referenceData">
import { ref, watch } from "vue";
const person = ref({
  name: '張三',
  age: 18 ,
})

function changeNmae (){
  person.value.name += '~'
}  
function changeAge (){
  person.value.age += 1
}
function changePerson(){
  person.value = {
    name: '李四',
    age: 50,
  }
}
//預設不開啟深度監視，若要深度監視則需要手動開啟
watch(person, (newVal , oldVal)=>{
  console.log(newVal, oldVal);
}, {deep: true})

</script>



<style lang="scss" scoped>


</style>