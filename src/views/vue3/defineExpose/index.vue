<template>
  <div class="defineExpose">
    <h1>DefineExpose</h1>
    <p>Title: {{title}}</p>
    <button @click="handleClick">use child</button>
    <child ref="childComponentRef"></child>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import child from './child.vue';

const title = ref('')
const childComponentRef = ref(null)

function handleClick(){
  title.value = childComponentRef.value.title  //不需要使用.value
  childComponentRef.value.increment()
}
</script>

<style scoped>

</style>
