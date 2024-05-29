<template>
  <div class="typescriptChild">
    <h2>typeScript子組件</h2>
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
import { reactive, withDefaults } from 'vue';
  
  //接收list
  // const props = defineProps(['list'])

  //接收list + 限制類型(加入？表示可傳可不傳，如果不加？父組件沒傳值會報錯)
  // const props = defineProps<{list?: PersonList}>()

  //接收list + 限制類型(加入？表示可傳可不傳，如果不加？父組件沒傳值會報錯) + 給定默認值
  withDefaults(defineProps<{list?: PersonList}>(),{list: [{name: "阿明", age: 19,
    cars: {
      car1: "Benz",
      car2: 'Bmw'
    }}]})

</script>

<style lang="scss" scoped>
</style>

