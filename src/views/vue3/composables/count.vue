<template>
  <h3>count: {{count}}</h3>
  <button @click="plus"> + 1</button>
  <div :class="['wrap',{in: isIn}]">{{count}}</div>
</template>

<script setup>
  import { ref } from 'vue';
import {useCount} from './useCount.js';
  const {count , setCount} = useCount(0);
  const isIn = ref(false)

  function plus(){
    setCount(count.value+=1)
    // isIn.value = !isIn.value
  }

</script>

<style lang='scss' scoped>
.wrap{
  width: 50%;
  margin: 0 auto;
  background-color: purple;
  animation: rotate 1s linear forwards;
  transform-origin: center center;
  transform: rotate(-360deg) translateX(-800px);
}

@keyframes rotate {
  0%{
    opacity: 0.5;
    transform: rotate(-360deg) translateX(-800px);
  }
  25%{
    opacity: 0.65;
    transform: rotate(-270deg) translateX(-600px);
  }
  50%{
    opacity: 0.75;
    transform: rotate(-180deg) translateX(-400px);
  }
  75%{
    opacity: 0.9;
    transform: rotate(-9-deg) translateX(-200px);
  }
  100%{
    opacity: 1;
    transform: rotate(0deg) translateX(0%);
  }
}
</style>
