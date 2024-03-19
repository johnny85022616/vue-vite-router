<template>
  <div>
    {{$attr.title}}
    <officialInput :="$attr"></officialInput>
  </div>
</template>

<script setup>

import { useAttrs } from 'vue';
import officialInput from './input.vue';
  const $attr = useAttrs()
  console.log($attr);

</script>
<style scoped>

</style>
