<template>
  <relative-shadow-container>
    <expect-circle></expect-circle>
  </relative-shadow-container>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";
import RelativeShadowContainer from "@jscomponents/decoration/relative_shadow_container.vue";
import ExpectCircle from "@jscomponents/decoration/expect_circle.vue";

@Options({
  name: "ExpectShadowCircle",
  components: {
    RelativeShadowContainer,
    ExpectCircle,
  },
})
export default class ExpectShadowCircle extends Vue {}
</script>
