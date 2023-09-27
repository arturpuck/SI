<template>
  <relative-shadow-container>
    <expect-circle v-bind:label="circleLabel"></expect-circle>
  </relative-shadow-container>
</template>

<script lang="ts">
import RelativeShadowContainer from "@jscomponents/decoration/relative_shadow_container.vue";
import ExpectCircle from "@jscomponents/decoration/expect_circle.vue";

export default {
  name : 'expect-shadow-circle',

  props : {
    circleLabel : {
      type: String,
    required: false,
    default: "",
    }
  },

  components : {
    RelativeShadowContainer,
    ExpectCircle
  }
}
</script>
