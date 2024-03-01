<template>
  <div class="customInput">
    <p>分數{{modelPoint}}</p>
    <button @click="$emit('update:modelPoint' , modelPoint + 1000)">+1000</button>
  </div>
</template>

<script setup>
import { computed } from "vue"

  defineProps(['modelPoint'])
  defineEmits(['update:modelPoint'])

  function plus(){
    $emit('update:modelPoint' , props.modelPoint + 1000)
  }


</script>

<style scoped>

</style>
