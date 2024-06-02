<template>
  <div class="Param">
    <h1>router query</h1>
    <p>param first: {{ params.first }}</p>
    <p>param second: {{ params.second }}</p>
  </div>
</template>

<script lang="ts" setup name="typescript">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { params } = toRefs(route)
</script>

<style lang="scss" scoped></style>
