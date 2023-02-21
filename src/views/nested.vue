<template>
  <div class="nested">
    <h1>nested</h1>
    <nav>
        <RouterLink to="/nested/a">a</RouterLink> | 
        <RouterLink to="/nested/b">b</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div>
</template>
<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>  
<style>
@media (min-width: 1024px) {
  .nested {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
