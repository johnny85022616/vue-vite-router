<template>
  <div class="watch">
    <h1>Watch</h1>
    <primitiveRefData></primitiveRefData>
    <referenceRefData></referenceRefData>
    <referenceReactiveData></referenceReactiveData>
    <referenceDataInRefReactive></referenceDataInRefReactive>
    <watchMulti></watchMulti>
  </div>
</template>

<script setup>
import primitiveRefData from './primitiveRefData.vue'
import referenceRefData from './referenceRefData.vue';
import referenceReactiveData from './referenceReactiveData.vue';
import referenceDataInRefReactive from './referenceDataInRefReactive.vue';
import watchMulti from './watchMulti.vue';
</script>

<style lang="scss" scoped>

</style>