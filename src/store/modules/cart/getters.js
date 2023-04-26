export default {
  products(state) {
    return state.items;
  },
  totalSum(state) {
    // return state.items.reduce((total, item) => total + item.price, 0);
    return state.total.toFixed(2);
  },
  quantity(state) {
    // return state.items.length;
    return state.qty;
  },
};
