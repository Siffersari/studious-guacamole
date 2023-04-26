import cartMutations from "./mutations.js";
import cartGetters from "./getters.js";
import cartActions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: cartMutations,
  getters: cartGetters,
  actions: cartActions,
};
