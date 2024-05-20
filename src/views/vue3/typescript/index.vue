<template>
  <div class="typescript">
    <h2>typeScript練習</h2>
    <ul>
      <li v-for="item, idx in list" :key="idx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="typescript">
import type {PersonInter , PersonList} from '@/types';
  const person1: PersonInter = {
    name: '張三',
    age: 19,
    cars: {
      car1: "Benz",
      car2: 'Bmw'
    }
  }
  const person2: PersonInter = {
    name: '李四',
    age: 28,
    cars: {
      car1: "Audi",
      car2: 'Bmw'
    }
  }

  const list:PersonList = [person1 , person2]
</script>

<style lang="scss" scoped>
</style>

