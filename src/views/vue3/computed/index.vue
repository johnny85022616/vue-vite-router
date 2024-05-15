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
    <div>
      <label for="">全名</label>
      <input type="text" v-model="fullName">
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const firstName = ref('')
const lastName = ref('')

//只有使用computed中的get方法
// const fullName = computed(()=>{
//   return `${firstName.value.toUpperCase()}-${lastName.value.toUpperCase()}`
// })

//使用conputed中的set和get方法
const fullName = computed({  
  set(val){  //改變fullName時參數會接收到fullname的值
    const arr = val.split('-')
    if(arr && arr.length>0){   //fullName轉換為fistName及lastName
      firstName.value = arr[0].toLowerCase()
      lastName.value = arr[1].toLowerCase()
    }
  },
  get(){
    return `${firstName.value.toUpperCase()}-${lastName.value.toUpperCase()}`
  }
})
</script>

<style lang="scss" scoped>
.child{
  background-color: pink;
}
</style>