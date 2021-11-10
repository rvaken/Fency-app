import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    length: 0,
    fenceOrders: [],
  },

  getters: {
    getLength: (state) => {
      return state.length;
    },
  },

  mutations: {
    SET_LENGTH(state, value) {
      state.length = value;
    },
  },

  actions: {
    setLength({ commit }, payload) {
      commit("SET_LENGTH", payload);
    },
  },

  modules: {},
});
