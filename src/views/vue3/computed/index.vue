<template>
  <div class="Computed">
    <h2>Computed</h2>
    <div>
      <label for="">姓</label>
      <input type="text" v-model="firstName">
    </div>
    <div>
      <label for="">名</label>
      <input type="text" v-model="lastName">
    </div>
    <h3>全名： {{ fullName }}</h3>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const firstName = ref('')
const lastName = ref('')

const fullName = computed(()=>{
  return `${firstName.value.toUpperCase()}-${lastName.value.toUpperCase()}`
})
</script>

<style lang="scss" scoped>
.child{
  background-color: pink;
}
</style>