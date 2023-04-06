import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter',()=>{
  let count = ref(0)

  function addCount(){
    count.value++
  }

  const doubleCount = computed(()=>{
    return count * 2
  })

  return {
    count ,
    addCount,
    doubleCount
  }
})