<template>
  <input :initValue="num" :activeBorderTag="activeBorderTag"/>
</template>

<script setup>
import { ref } from 'vue';
import input from './input.vue';

const num = ref(0)
const activeBorderTag = ref(true)

</script>
<style scoped>

</style>
