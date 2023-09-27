<template>
  <button v-bind:title="buttonTittle" class="stop-button"></button>
</template>

<script lang="ts">
export default {
  props : { 
     buttonTittle : {
       required : false,
       type : String,
       default : null
     }
  },
  name: "stop-button",
};
</script>

<style lang="scss" scoped>
@import "~sass/components/movies/television_control_or_decoration";

.stop-button {
  display: inline-block;
  border: none;
  background: linear-gradient(#e32c3c, #360808);
  @include television-control-or-decoration();
  outline: none;
  cursor: pointer;
}
</style>