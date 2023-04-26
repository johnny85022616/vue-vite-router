<template>
  <div class="throttle">
    <h2>windowY : {{wy}}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import tools from '../../../utils/tools';

const wy = ref(0)
function setOffsetTop(){
  wy.value = window.scrollY
}
const throttleFoo = tools.throttle(setOffsetTop , 500);

window.addEventListener("scroll" , throttleFoo)

</script>

<style lang='scss' scoped>
  .throttle{
    height: 3000px;
    h2{
      position: fixed;
      left: 50%;
      top: 50%;
    }
  }
</style>
