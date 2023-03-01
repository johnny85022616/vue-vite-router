import { ref } from "vue";

export function useCount(initVal){
  const count = ref(initVal);

  function setCount(val){
    console.log(val);
    count.value = val
  }

  return {
    count,
    setCount
  }
}