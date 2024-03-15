<template>
  <div class="customInput">
    <p>分數{{modelPoint}}</p>
    <button @click="handlePointClick">+1000</button>
  </div>
</template>

<script setup>
import { computed } from "vue"

  const props = defineProps(['modelPoint'])
  const $emit = defineEmits(['update:modelPoint'])

  function handlePointClick(){
    $emit('update:modelPoint' , props.modelPoint + 1000)
  }

</script>

<style scoped>

</style>
