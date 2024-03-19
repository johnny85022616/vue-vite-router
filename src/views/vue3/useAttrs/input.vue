<template>
  <div class="customInput">
    <input type="text" v-model="inputVal" :class="[{green: activeBorderTag}]">
  </div>
</template>

<script setup>
let inputVal = props.initValue;
const props = defineProps(["initValue" , "activeBorderTag"])

</script>

<style lang="scss" scoped>
.green{
    border: 1px solid green;
  }

</style>
