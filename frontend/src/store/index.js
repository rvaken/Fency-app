import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    length: 0,
    currentPrice: 0,
    fenceOrders: [],
  },

  getters: {
    getLength: (state) => {
      return state.length;
    },

    getPrice: (state) => {
      return state.currentPrice;
    },
  },

  mutations: {
    SET_LENGTH(state, value) {
      state.length = value;
    },

    SET_PRICE(state, value) {
      state.currentPrice = value;
    },
  },

  actions: {
    setLength({ commit }, payload) {
      commit("SET_LENGTH", payload);
    },

    setPrice({ commit }, payload) {
      commit("SET_PRICE", payload);
    },
  },

  modules: {},
});
