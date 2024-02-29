<template>
  <div class="customInput">
    <p>分數{{point}}</p>
    <button>+1000</button>
  </div>
</template>

<script setup>
import { computed } from "vue"

  const p = defineProps(['point'])
  const up = defineEmits(['update:modelPoint'])


</script>

<style scoped>

</style>
