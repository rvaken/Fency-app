<template>
  <section
    class="hamburger"
    :class="{ active: burger_state }"
    @click="burger_state = !burger_state"
  >
    <label for="menu_checkbox">
      <div></div>
      <div></div>
      <div></div>
    </label>
  </section>
</template>

<script>
export default {
  name: "Hamburger",

  data() {
    return {
      burger_state: false,
    };
  },
};
</script>

<style lang="scss">
.hamburger {
  padding: 15px;
  background-color: $green;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
}

label {
  display: block;

  width: 20px;
  height: 20px;
  // transform: translateY(-50%);
  transition: 0.3s ease transform;
  cursor: pointer;
}

label div {
  width: 6px;
  height: 4px;
  background-color: #fff;
  margin-left: 0;
  margin-bottom: 4px;
  border-radius: 4px;
  transition: 0.3s ease width, 0.3s ease margin-left, 0.3s ease margin-bottom,
    0.3s ease background-color;
}

label div:first-child {
  width: 17px;
}

label div:nth-child(2) {
  width: 10px;
}

label div:last-child {
  width: 17px;
  margin-bottom: 0;
}

.active {
  label {
    transform: rotateZ(-90deg);
  }

  label div {
    width: 6px;
    margin-left: 8px;
    background-color: #fff;
  }
}
</style>
