<template>
  <div class="grid-debugger">
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
    <div class="grid-debugger__column"></div>
  </div>
</template>

<script>
export default {
  name: "GridDebug",
};
</script>

//
<style lang="scss">
// .grid-debugger {
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: grid;
//   grid-template-columns: repeat(12, 96px);
//   height: 100%;
//   width: 100%;
//   justify-content: center;
//   grid-gap: 42px;
//   // z-index: 1;
//   &__column {
//     background-color: #00b3c0;
//     opacity: 25%;
//     pointer-events: none;
//   }
// }
</style>
