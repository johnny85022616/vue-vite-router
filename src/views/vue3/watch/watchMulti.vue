<template>
  <div class="referenceDataInRefReactive">
    <h2>監視多個對象類型中的屬性</h2>
    <h3>姓名：{{person.name}}</h3>
    <h3>年齡：{{person.age}}</h3>
    <h3>汽車：{{person.car.c1}}、{{person.car.c2}}</h3>
    <button @click="changeNmae">變更姓名</button>
    <button @click="changeAge">變更年齡</button>
    <button @click="changeCar1">變更汽車1</button>
    <button @click="changeCar2">變更汽車2</button>
    <button @click="chageCar">變更整個車庫</button>
  </div>
</template>

<script setup name="referenceDataInRefReactive">
import { reactive, watch } from "vue";
const person = reactive({
  name: '張三',
  age: 18 ,
  car:{
    c1: 'BMW',
    c2: 'Benz'
  }
})

function changeNmae (){
  person.name += '~'
}  
function changeAge (){
  person.age += 1
}
function changeCar1(){
  person.car.c1 = 'Audi'
}
function changeCar2(){
  person.car.c2 = 'Ford'
}
function chageCar(){
  person.car = {c1: 'tesla' , c2: "porshe"}
}
function changePerson(){
  person.value = {
    name: '李四',
    age: 50,
  }
}

//監視person中對象類型的屬性(默認不開啟深度監視)
watch([()=>person.name ,()=>person.car] , (newVal , oldVal)=>{
  console.log(newVal , oldVal);
},{deep:true})

</script>

<style lang="scss" scoped>
.referenceRefData{
  margin-bottom: 30px;
}
</style>