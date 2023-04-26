import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootGetters from "./getters.js";
import rootActions from "./actions.js";
import productModule from "./modules/products/index.js";
import cartModule from "./modules/cart/index.js";

const store = createStore({
  modules: {
    products: productModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
