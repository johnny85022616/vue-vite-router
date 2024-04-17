//選擇式API寫法

import { defineStore } from "pinia";

export const useInfoStore = defineStore('info',{
  state(){
    return {
      name: "johnny",
      age: 20,
    }
  },
  action(){
    
  },
  getters(){

  }
})