import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
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
  faTimesCircle,
  faSadTear,
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
  faShoppingCart,
  faTimesCircle,
  faSadTear
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

axios.defaults.baseURL = "http://localhost:8000/api/";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
