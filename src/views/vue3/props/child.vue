<template>
  <div class="children">
    <h3>this is children</h3>
    <p>{{msg}}</p>
    <p>現在是type: {{type}}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    msg:{
      type: String,
      default(){
        return ''
      }
    },
    type:{
      type: Number,
      validator(val){ //若不符合驗證會報黃色提醒
        return [1,2,3].includes(val)
      }
    }
  })
</script>

<style scoped>

</style>
