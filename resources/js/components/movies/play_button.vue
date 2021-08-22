<template>
  <button class="play-button"></button>
</template>

<script>
export default {
  name: "play-button",
};
</script>

<style lang="scss" scoped>
.play-button {
  display: inline-block;
  border: none;
  background: linear-gradient(#2af92a, #054006);
  clip-path: polygon(0 0, 0 100%, 100% 50%);
  @include television-decoration();
  outline: none;
  cursor: pointer;
}
</style>
