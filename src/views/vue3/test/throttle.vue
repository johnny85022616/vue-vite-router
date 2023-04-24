<template>
  <h2>windowY : {{wy}}</h2>
</template>

<script setup>
import { ref } from 'vue';
import tools from '../../../utils/tools';

const wy = ref(0)
function setOffsetTop(){
  wy.value = window.scrollY
}
const throttleFoo = tools.throttle(setOffsetTop , 1000);

window.addEventListener('scroll' , function(){
  console.log(12);
  throttleFoo()
})
  

</script>

<style lang='scss' scoped>

</style>
