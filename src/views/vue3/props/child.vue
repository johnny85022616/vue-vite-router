<template>
  <div class="children">
    <h3>this is children</h3>
    <p>{{msg}}</p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    msg:{
      type: String,
      default(){
        return ''
      }
    }
  })
</script>

<style scoped>

</style>
