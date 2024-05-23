<template>
  <div class="typescriptChild">
    <h2>typeScript練習</h2>
    <ul>
      <li v-for="item, idx in list" :key="idx">
        <p>{{item.name}}</p>
        <p>{{item.age}}</p>
        <p v-for="car,idx in item.cars" :key="idx">
          {{ car }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="typescriptChild">
import type {PersonList} from '@/types';
import { reactive } from 'vue';
  
  //接收list + 限制類型
  const props = defineProps<{list: PersonList}>()
</script>

<style lang="scss" scoped>
</style>

