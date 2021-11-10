import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    length: 0,
  },

  getters: {
    getLength: (state) => {
      return state.length;
    },
  },

  mutations: {},

  actions: {},

  modules: {},
});
