<template>
  <p>{{ car.name }}{{ car.price }}</p>
  <button @click="changeCar">change reactive Obj</button>
  <p>{{ car1.name }}{{ car1.price }}</p>
  <button @click="changeCar1">change ref Obj</button>

  <p v-for="person,idx in personInfo" :key="idx">{{ person.name }}{{ person.age }}</p>
  <button @click="changeInfo">change reactive Array</button>
</template>

<script setup>
import { reactive, ref } from 'vue';


const car = reactive({name: 'bmw' , price: 10000})
const car1 = ref({name: 'bmw' , price: 10000})

function changeCar(){
  Object.assign(car , {name: "benz" , price: 20000})  //若要直接賦予值需用Object.assign
}
function changeCar1(){
  car1.value =  {name: "toyota" , price: 2000} //可直接賦予
}

const personInfo = reactive([])

function changeInfo(){
  // personInfo = [{name: 'Sam', age:33}]
  
}

</script>

<style lang='scss' scoped>

</style>
