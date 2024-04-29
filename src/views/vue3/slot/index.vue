<template>
  <div>
    <h1>Slot</h1>
    <child>
      <div class="defautSlot">
        <p>我是默認插槽文字</p>
      </div>
      <template v-slot:slotA>
        <div class="NamedSlotA">
          <p>我是具名插槽slotA區塊文字</p>
        </div>
      </template>
      <!-- 可以用#代替v-slot -->
      <template #slotB> 
        <div class="NamedSlotB">
          <p>我是具名插槽slotB區塊文字</p>
        </div>
      </template>
    </child>

    <child1 :todo="todo"></child1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import child from './child.vue';
import child1 from './child1.vue';

const todo = ref([
  {id:1 , title: "吃飯", done: true},
  {id:2 , title: "睡覺", done: false},
  {id:3 , title: "跑步", done: false},
  {id:4 , title: "唱歌", done: true},
])
</script>

<style scoped>

</style>
