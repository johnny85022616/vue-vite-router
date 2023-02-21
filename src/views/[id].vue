<template>
  <div class="about">
    <h1>{{ route.path }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

  const route = useRoute();
  console.log(route.path);
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
