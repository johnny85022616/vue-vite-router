import { reactive } from "vue";

export function useProductDetail(initVal) {

  const state = reactive({ productData: initVal });

  async function fetchData() {
    await fetch(
      "https://m.shopping.friday.tw/mobileapi/api/product/7995418/detail?cid=419485"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(1235);
        state.productData = result.data[0]
      });
  }

  return {
    state,
    fetchData
  };
}
