import { readonly, ref } from "vue";

export function useProductDetail(initVal) {
  const product = ref(initVal);

  async function fetchData() {
    await fetch(
      "https://m.shopping.friday.tw/mobileapi/api/product/7995418/detail?cid=419485"
    )
      .then((res) => res.json())
      .then((result) => { 
        product.value = result.data[0]
      });
  }

  function setProduct(val){
    product.value = val;
  }

  function setIntro(val){
    product.value.intro = val
  }

  fetchData()

  return {
    product: readonly(product),
    setProduct,
    setIntro
  };
}
