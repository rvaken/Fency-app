import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    length: 0,
    currentPrice: 0,
    fenceOrders: [],
    poles: 0,
  },

  getters: {
    getLength: (state) => {
      return state.length;
    },

    getPoles: (state) => {
      return state.poles;
    },

    getPrice: (state) => {
      let z = 0;
      for (var x = 0; x < state.fenceOrders.length; x++) {
        z += state.fenceOrders[x].price;
      }
      return z;
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

    SET_POLES(state, value) {
      state.poles = value;
    },

    ADD_ORDER(state, value) {
      state.fenceOrders.push(value);
    },

    DELETE_ORDER(state, order) {
      const index = state.fenceOrders.indexOf(order);

      if (index > -1) {
        state.fenceOrders.splice(index, 1);
      }
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

    setPoles({ commit }, payload) {
      commit("SET_POLES", payload);
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
