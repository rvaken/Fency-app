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

    getOrders: (state) => {
      return state.fenceOrders;
    },

    getOrderAmt: (state) => {
      return state.fenceOrders.length;
    },
  },

  mutations: {
    SET_LENGTH(state, value) {
      state.length = value;
    },

    SET_PRICE(state, value) {
      state.currentPrice = value;
    },

    SET_ORDERS(state, value) {
      state.fenceOrders = value;
    },

    ADD_ORDER(state, value) {
      state.fenceOrders.push(value);
    },

    DELETE_ORDER(state, x) {
      state.fenceOrders.splice(x, 1);
    },
  },

  actions: {
    setLength({ commit }, payload) {
      commit("SET_LENGTH", payload);
    },

    setPrice({ commit }, payload) {
      commit("SET_PRICE", payload);
    },

    setOrders({ commit }, payload) {
      commit("SET_ORDERS", payload);
    },

    addOrder({ commit }, payload) {
      commit("ADD_ORDER", payload);
    },

    deleteOrder({ commit }, payload) {
      commit("DELETE_ORDER", payload);
    },
  },

  modules: {},
});
