<template>
  <div aria-hidden="true" class="icon-arrow-right"></div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";

@Options({ name: "IconArrowRight" })
export default class IconArrowRight extends Vue {}
</script>

<style lang="scss" scoped>
.icon-arrow-right {
  display: inline-block;
  width: 1.1vw;
  height: 1.1vw;
  min-width: 10px;
  min-height: 10px;
  background: white;
  clip-path: polygon(55% 0, 100% 50%, 55% 100%, 0% 100%, 45% 50%, 0% 0%);
}
</style>
