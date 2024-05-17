<template>
  <div class="watchEffect">
    <h2>watchEffect</h2>
    <h3>寬度：{{width}}</h3>
    <h3>高度：{{height}}</h3>
    <button @click="changeWidth">增寬</button>
    <button @click="changeHeight">增高</button>
  </div>
</template>

<script setup name="watchEffect">
import { ref, watch, watchEffect } from "vue";
const width = ref(0)
const height = ref(0)

function changeWidth (){
  width.value += 10
}  
function changeHeight (){
  height.value += 10
}


// watch([width, height] , (newVal)=>{
//   const [width, height] = newVal
//   if(width > 50 || height > 80){
//     console.log("達到目標");
//   }
// })

//內部dependency有變化時自動監視
watchEffect(()=>{
  if(width.value> 50 || height.value>80 ){
    console.log("達到目標");
  }
})

</script>

<style lang="scss" scoped>

</style>