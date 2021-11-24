<template>
  <button v-bind:title="buttonTittle" class="play-button"></button>
</template>

<script>
export default {
  props : { 
     buttonTittle : {
       required : false,
       type : String,
       default : null
     }
  },
  name: "play-button",
};
</script>

<style lang="scss" scoped>
@import "~sass/components/movies/television_control_or_decoration";

.play-button {
  display: inline-block;
  border: none;
  background: linear-gradient(#2af92a, #054006);
  clip-path: polygon(0 0, 0 100%, 100% 50%);
  @include television-control-or-decoration();
  outline: none;
  cursor: pointer;
}
</style>
