<template>
  <div class="toRefs">
    <h1>toRefs</h1>
    <h3>name: {{person.name}}</h3>
    <h3>age: {{person.age}}</h3>
  </div>
  <button @click="handletoRefsClick">toRefs</button>
  <button @click="handletoRefClick">toRef</button>
</template>

<script setup>
import { reactive, ref, toRef, toRefs } from "vue";

const person = reactive({
  name: "john",
  age: 19,
});


let { name, age } = toRefs(person); //reactive響應式物件只可用toRefs來解構
console.log(person, toRefs(person));

let ag = toRef(person , 'age') //toRef只可拿單一屬性
console.log(ag);


function handletoRefsClick() {
  name.value += "!";
  age.value += 1;
}
function handletoRefClick(){
  ag.value +=10
}

</script>

<style scoped>
</style>
