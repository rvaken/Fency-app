<template>
  <section class="fence-cart">
    <div class="content">
      <div class="content-price">
        <div class="price-display">
          <p>
            €
            <animated-number
              :value="price"
              :duration="duration"
              :format-value="formatToWholes"
            />
          </p>
        </div>
      </div>

      <div class="header-button" @click="basketClick">
        <div class="header-orders">
          <p>{{ orderAmt }}</p>
        </div>

        <font-awesome-icon
          class="header-button__icon"
          v-for="icon in icons"
          :key="icon.id"
          :icon="icon.el"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  name: "FenceCart",

  components: {
    AnimatedNumber,
  },

  data() {
    return {
      duration: 200,
      icons: [
        {
          id: 1,
          el: "shopping-basket",
        },
      ],
    };
  },

  computed: {
    price() {
      return this.$store.getters.getPrice;
    },

    orderAmt() {
      return this.$store.getters.getOrderAmt;
    },
  },

  methods: {
    basketClick() {
      alert("You just ordered €" + this.price.toFixed(2) + " worth of fence!");
      this.$store.dispatch("setPrice");
    },

    formatToWholes(number) {
      return `${Number(number).toFixed(2)}</h1>`;
    },
  },
};
</script>

<style lang="scss">
.fence-cart {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: $green;
  display: flex;
  flex-direction: row-reverse;

  .content {
    display: flex;
    align-items: center;

    padding: 50px;

    .content-price {
      .price-display {
        border: solid 2px #fff;
        margin: 25px;
        border-radius: 40px;
        min-width: 150px;
        p {
          padding: 5px 10px;
          color: #fff;
          font-family: $main-font;
          font-size: 20px;
        }
      }
    }

    .header-button {
      transition: 0.3s;
      background-color: greenyellow;
      @include shadow();
      position: relative;

      border-radius: 50%;
      padding: 50px;
      display: flex;
      justify-content: center;

      .header-orders {
        top: 5px;
        right: 5px;
        position: absolute;
        background-color: $red;
        border-radius: 50%;
        height: 35px;
        width: 35px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        p {
          color: #fff;
          font-family: $main-font;
          font-size: 14px;
          font-weight: 600;
        }
      }

      &__icon {
        height: 40px;
        width: 40px;
        color: $green;
      }

      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
}
</style>
