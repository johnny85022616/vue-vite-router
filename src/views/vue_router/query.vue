<template>
  <div class="query">
    <h1>router query</h1>
    <p>query Name: {{ query.name }}</p>
    <p>query age: {{ query.age }}</p>
  </div>
</template>

<script lang="ts" setup name="typescript">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { query } = toRefs(route)
</script>

<style lang="scss" scoped></style>
