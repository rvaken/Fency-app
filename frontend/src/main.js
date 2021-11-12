import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRulerCombined,
  faUserCircle,
  faAlignLeft,
  faWarehouse,
  faCopyright,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

library.add(
  faRulerCombined,
  faUserCircle,
  faAlignLeft,
  faWarehouse,
  faCopyright,
  faShoppingBasket,
  faShoppingCart
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
