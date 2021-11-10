import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    placedMarker: {},
    markers: [],
  },

  getters: {
    getPlacedMarker: (state) => {
      return state.placedMarker;
    },

    getMarkers: (state) => {
      return state.markers;
    },
  },

  mutations: {
    ADD_MARKER(state, x) {
      state.markers.push(x);
    },
  },

  actions: {
    addToMarkers({ commit }, payload) {
      commit("ADD_MARKER", payload.placedMarker);
    },
  },
  modules: {},
});
