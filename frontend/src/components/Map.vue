<template>
  <section class="map">
    <div class="map__content">
      <div class="content__materials">
        <div class="materials-container">
          <div class="materials-buttons">
            <Material
              v-for="material in materials"
              @click.native="
                buttonClick(material.id, material.price, material.name)
              "
              :key="material.id"
              :name="material.name"
              :image="material.image"
              :price="material.price"
              :color="material.color"
              class="button-item"
              :class="{ active: currentActiveButton === material.id }"
            />
          </div>
        </div>
      </div>
      <Hamburger
        class="menu-burger"
        @click.native="menu_toggle = !menu_toggle"
      />
      <l-map
        class="content__leaflet"
        :zoom="zoom"
        :center="center"
        @click="mapClicked"
        style="height: 70vh; width: 100%"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-polyline :lat-lngs="this.polyline" color="#f07167"></l-polyline>

        <l-marker
          class="leaflet-icon"
          v-for="marker in markers"
          :key="marker.index"
          :lat-lng="marker"
          @click="closeFence"
          iconUrl="@/assets/images/icon-marker.svg"
        ></l-marker>
      </l-map>

      <div :class="{ active: !menu_toggle }" class="content__controller">
        <div class="controller-display">
          <p>
            <animated-number
              :value="distance"
              :duration="duration"
              :format-value="formatToWholes"
            />
            m
          </p>
        </div>
        <div class="controller-buttons">
          <div
            v-for="button in buttons"
            :key="button.id"
            @click="button.function"
            class="button-element"
            :class="button.style"
          >
            <p>{{ button.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPolyline } from "vue2-leaflet";
import { Icon } from "leaflet";
import AnimatedNumber from "animated-number-vue";
import Hamburger from "./Hamburger.vue";
import Material from "./Material.vue";

import axios from "axios";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("@/assets/images/marker-icon.svg"),
  iconUrl: require("@/assets/images/marker-icon.svg"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "Map",

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    AnimatedNumber,
    Hamburger,
    Material,
  },

  data() {
    return {
      zoom: 18,
      center: [51.0543, 3.7174],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      markers: [],
      duration: 200,
      menu_toggle: false,
      buttons: [
        {
          id: 1,
          function: this.clearMarkers,
          text: "Clear",
          style: "red",
        },

        {
          id: 2,
          function: this.orderFences,
          text: "Confirm",
          style: "green",
        },
      ],

      materials: [],

      currentActiveButton: 0,
      currentPrice: 11.9,
      currentMaterial: "Wood",
      orderId: 0,
    };
  },

  created() {
    axios
      .get(`/fences?XDEBUG_SESSION_START=1`)
      .then((response) => {
        Object.values(response.data).forEach((val, index) => {
          this.materials.push({
            name: val.name,
            price: val.price,
            id: index,
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  fetchData() {
    let JWT = localStorage.getItem("fencyJWT");
    let auth = "Bearer " + JWT;
    fetch("http://localhost:8000/api/fences/" + "?XDEBUG_SESSION_START=1", {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    }).then((response) => response.json());
  },

  computed: {
    calcPrice() {
      return this.currentPrice * this.distance + this.$store.getters.getPrice;
    },

    distance() {
      var l = 0;

      if (this.markers.length > 1) {
        for (let j = 1; j < this.markers.length; j++) {
          let m = Math.sqrt(
            (this.markers[j].lat - this.markers[j - 1].lat) ** 2 +
              (this.markers[j].lng - this.markers[j - 1].lng) ** 2
          );

          l += m;
        }
      }
      return (l * 100000).toFixed(2);
    },

    polyline() {
      let x = [];
      for (let i = 0; i < this.markers.length; i++) {
        x.push(this.markers[i]);
      }

      return x;
    },
  },

  methods: {
    buttonClick(val, pri, mat) {
      this.currentActiveButton = val;
      this.currentPrice = pri;
      this.currentMaterial = mat;
    },

    clearMarkers() {
      this.markers = [];
    },

    orderFences() {
      this.$store.dispatch("setLength", this.distance);
      this.$store.dispatch("setPrice", this.calcPrice);
      this.$store.dispatch("addOrder", {
        id: this.orderId,
        material: this.currentMaterial,
        price: this.currentPrice * this.distance,
        amount: this.distance,
      });
      this.orderId += 1;

      this.markers = [];
    },

    closeFence() {
      if (this.markers.length > 2) {
        this.markers.push(this.markers[0]);
      }
    },

    mapClicked(event) {
      this.markers.push(event.latlng);
    },

    formatToWholes(number) {
      return `${Number(number).toFixed(2)}</h1>`;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/imports/variables.scss";

.map {
  @include container(0);
  width: 60%;
  height: 70%;

  &__content {
    display: flex;
    align-items: center;

    position: relative;

    .menu-burger {
      position: absolute;
      right: 25px;
      top: 25px;
      z-index: 999;
    }

    .content__materials {
      position: absolute;
      transform: translateX(-100%);
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $opac-dark;

      .materials-container {
        position: relative;
        .materials-buttons {
          position: absolute;
          right: 0;
          display: flex;
          flex-direction: column;

          .button-item {
            border-bottom: solid 1px black;

            &:nth-last-child(1) {
              border-bottom: none;
            }

            &.active {
              border-right: solid 10px $dark;
            }
          }
        }
      }
    }

    .content__leaflet {
      // border: solid 2px $opac-dark;

      &:hover {
        cursor: cell;
      }
    }

    .content__controller {
      display: flex;
      flex-direction: column-reverse;
      position: absolute;
      overflow: hidden;
      right: 0;
      transition: transform 0.3s ease;
      transform: translateX(100%);
      z-index: 998;

      width: 25%;
      min-width: 200px;
      height: 70vh;
      background-color: $dark;

      &.active {
        transform: translateX(0);
      }

      .controller-display {
        border: solid 2px #fff;
        margin: 25px;
        border-radius: 40px;
        p {
          color: #fff;
          font-family: $main-font;
          font-size: 20px;
        }
      }

      .controller-buttons {
        .button-element {
          margin: 25px;
          border-radius: 40px;

          transition: 0.3s;
          p {
            text-align: center;
            padding: 15px 30px;
            color: #fff;
            font-family: $main-font;
            font-size: 20px;
          }

          &:hover {
            cursor: pointer;
            @include shadow;
            transform: scale(1.05);
            transition: 0.3s;
          }

          &.red {
            background-color: $red;
          }

          &.green {
            background-color: $green;
          }
          &.yellow {
            background-color: $orange;

            p {
              color: $dark;
            }
          }
        }
      }
    }
  }
}
</style>
