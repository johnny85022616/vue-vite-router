<template>
  <div class="props">
    <h1>Props</h1>
    <button @click="changeType(1)">1</button>
    <button @click="changeType(2)">2</button>
    <button @click="changeType(3)">3</button>
    <button @click="changeType(4)">4</button>
    <children msg="大家好" :type="type"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import children from '../props/child.vue';
const type = ref(1)
function changeType(val){
  type.value = val
}

</script>

<style scoped>

</style>
