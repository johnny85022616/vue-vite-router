<template>
  <div class="child">
    <h3>count plus machine</h3>
    <button @click="handleClick">plus</button>  
  </div>
</template>

<script setup>
  const emit = defineEmits(['plus'])
  function handleClick(){
    emit('plus')
  }
</script>

<style scoped>

</style>
