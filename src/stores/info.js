//選擇式API寫法

import { defineStore } from "pinia";

export const useInfoStore = defineStore('info',{
  state(){
    return {
      name: "johnny",
      age: 20,
      dollars: 500000,
    }
  },
  actions:{
    addAge(addCount){
      this.age += addCount
    }
  },
  getters:{
    fotmatDollars(){
      return this.dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
})