<template>
  <button @click="(e)=>getData(e)">取得資料</button>
</template>

<script setup>
import tools from '../../../utils/tools';

let debounceFoo = tools.unbounce(foo , 2000)
function getData(){
  debounceFoo()
}

function foo(content){
  console.log('click');
}

</script>

<style lang='scss' scoped>

</style>
