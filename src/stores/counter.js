//組合式api寫法

import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter',()=>{
  let count = ref(0)
  const product = ref(null)

  function addCount(){
    count.value++
  }

  async function fetchApiData() {
      const data = await fetch(
        "https://k8aiapi.shopping.friday.tw/api/getalist"
      )
      .then((res) => res.json())
      .then((result) => { 
        if(result){
          return result[0]
        }else{
          console.log("不存在");
        }
      });
      product.value = data
  }

  const doubleCount = computed(()=>{
    return count * 2
  })

  return {
    count ,
    product,
    addCount,
    doubleCount,
    fetchApiData
  }
})