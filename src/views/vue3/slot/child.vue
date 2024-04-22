<template>
  <div class="slot">
    <h2>默認插槽</h2>
    <slot></slot>
    <h2>具名插槽</h2>
    <h3>具名插槽A區塊</h3>
    <slot name="slotA"></slot>
    <h3>具名插槽B區塊</h3>
    <slot name="slotB"></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slot{
  background-color: skyblue;
}
</style>
