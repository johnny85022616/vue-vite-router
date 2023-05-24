<template>
  <div>
    <input type="text" v-model="inputValue" @input="filterData" placeholder="請輸入關鍵字" />
    <ul>
      <li v-for="item in filteredData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      data: [
        { id: 1, name: '新東陽' },
        { id: 2, name: '台新' },
        { id: 3, name: '富邦勇士' },
        // 其他資料...
      ]
    };
  },
  computed: {
    filteredData() {
      if (this.inputValue) {
        // 使用過濾函數來過濾資料
        return this.data.filter(item => item.name.includes(this.inputValue));
      } else {
        return this.data;
      }
    }
  },
  methods: {
    filterData() {
      // 處理input輸入時觸發的事件
      // 這裡可以添加其他處理邏輯，例如篩選資料
    }
  }
};
</script>
