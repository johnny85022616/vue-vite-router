<template>
  <div class="customInput">
    <!-- 利用@input事件 -->
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <!-- 利用computed方法 -->
    <!-- <input type="text" v-model="value"> -->
  </div>
</template>

<script setup>
import { computed } from "vue"

  defineProps(['modelValue'])
  defineEmits(['update:modelValue'])


  //computed 作法
  // const props = defineProps(['modelValue'])
  // const emit = defineEmits((['update:modelValue']))

  // const value = computed({
  //   get(){
  //     return props.modelValue
  //   },
  //   set(val){
  //     emit('update:modelValue' , val)
  //   }
  // })
</script>

<style scoped>

</style>
