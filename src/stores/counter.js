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
        "https://m.shopping.friday.tw/mobileapi/api/product/7995418/detail?cid=419485"
      )
      .then((res) => res.json())
      .then((result) => { 
        return result.data[0]
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