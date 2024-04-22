<template>
  <div class="child">
    <h2>Child</h2>
    <p>count: {{counterStore.count}}</p>
  </div>
</template>

<script setup>
import {useCounterStore} from '../../../stores/counter';

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
.child{
  background-color: pink;
}
</style>