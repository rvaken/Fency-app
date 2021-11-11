<template>
  <section class="material">
    <div class="content" :style="background">
      <img
        class="content-image"
        :src="require('@/assets/images/materials/' + image + '')"
      />
      <p class="content-name">{{ name }}</p>
      <p>
        <span>€{{ price }}/m</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Material",

  props: {
    image: {
      type: String,
      default: "steel.svg",
    },

    color: {
      type: String,
      default: "$green",
    },

    name: {
      type: String,
      default: "Fence",
    },
    price: {
      type: Number,
      default: 10.0,
    },
  },

  computed: {
    background() {
      return "background-color: " + this.color;
    },
  },
};
</script>

<style lang="scss">
.material {
  transition: 0.3s;
  .content {
    display: flex;
    flex-direction: column;
    padding: 25px;

    .content-image {
    }

    .content-name {
      font-weight: 800;
      margin: 0;
      padding: 5px;
    }

    span {
    }
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    cursor: pointer;
  }
}
</style>
