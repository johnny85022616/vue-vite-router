<template>
  <h1>作用域插槽</h1>
  <ul>
    <li v-for="(item) in todo" :key="item.id">
      <slot :row="item"></slot>
    </li>
  </ul>
</template>

<script setup>
defineProps(['todo'])
</script>

<style scoped>
.slot{
  background-color: skyblue;
}
</style>
