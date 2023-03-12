<template>
  <div class="composables">
    <h1>Composables</h1>
    <count></count>
    <!-- <productInfo v-if="product" :productDetail="product" @setProduct="setProduct" @setIntro="setIntro"/> -->
    <div v-for="(mc , mkey) in category" :key="mkey">
      <p>{{ mc.name }}</p>
      <ul>
        <template v-for="(bc,bkey,index) in mc.sub" :key="bkey">
          <template v-if="index < 5">
            <li>{{ bc.name }}</li>
          </template>
          <template v-if="index >=5 && mc.lookMore">
            <li>{{ bc.name }}</li>
          </template>
        </template>
        <p @click="lookMore(mkey)">{{ mc.lookMore === false? '看更多':'看更少' }}</p>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {useProductDetail} from './useProductDetail';
import count from './count.vue';
import productInfo from './product.vue';
import { onMounted , ref  } from 'vue';

let {product,fetchData,setProduct,setIntro} = useProductDetail(null)
const category = ref({
    M001:{
      name: 'M001',
      sub:{
        B001:{
          name: "B001",
        },
        B002:{
          name: "B002",
        },
        B003:{
          name: "B003",
        },
        B004:{
          name: "B004",
        },
        B005:{
          name: "B005",
        },
        B006:{
          name: "B006",
        },
        B007:{
          name: "B007",
        },
        B008:{
          name: "B008",
        },
      }
    },
    M002:{
      name: 'M002',
      sub:{
        B009:{
          name: "B009",
        },
        B010:{
          name: "B010",
        },
        B011:{
          name: "B011",
        },
        B012:{
          name: "B012",
        },
        B013:{
          name: "B013",
        },
        B014:{
          name: "B014",
        },
        B015:{
          name: "B015",
        },
        B016:{
          name: "B016",
        },
      }
    }
  })

  parseCat()

function parseCat(){
  for (const [key, value] of Object.entries(category.value)) {
  value.lookMore = false;
}
}
  
function lookMore(mkey){
  category.value[mkey].lookMore = !category.value[mkey].lookMore 
}
onMounted(async()=>{  
  await fetchData();
  console.log(product);
  setProduct({...product.value, a:'這是打完API之後新加的屬性'})
})

</script>

<style scoped>

</style>
