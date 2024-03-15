<template>
  <div class="customInput">
    <input type="text" v-model="inputVal" :class="{green: activeBorderTag}">
    <p>input value: {{inputVal}}</p>
  </div>
</template>

<script setup>
let inputVal = props.initValue;
const props = defineProps(["initValue" , "activeBorderTag"])
</script>

<style lang="scss" scoped>
input{
  
}

</style>
