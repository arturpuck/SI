<template>
  <relative-shadow-container>
    <expect-circle></expect-circle>
  </relative-shadow-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RelativeShadowContainer from "@jscomponents/decoration/relative_shadow_container.vue";
import ExpectCircle from "@jscomponents/decoration/expect_circle.vue";

@Component({
  components: {
    RelativeShadowContainer,
    ExpectCircle,
  },
})
export default class PornstarsList extends Vue {}
</script>
