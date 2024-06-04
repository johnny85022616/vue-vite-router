<template>
  <div class="programmaticNavigation">
    <h1>編程式路由</h1>
    <button @click="handleClick">跳轉</button>
  </div>
</template>

<script lang="ts" setup name="typescript">
import { useRouter } from "vue-router";

  const router = useRouter();

  function handleClick(){
    router.push({ name: 'param', params: { first: 'L0001', second: 'M0002' } })
  }

</script>

<style lang="scss" scoped></style>
