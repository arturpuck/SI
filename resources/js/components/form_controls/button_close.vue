<template>
  <button v-bind:title="translations['title']" type="button" class="button-close">
    <div class="button-close__cross"></div>
    <span v-text="translations['label']" class="button-close__label"></span>
  </button>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";
import Translations from "@jsmodules/translations/components/form_controls/button_close";

@Options({ name: "ButtonClose", inheritAttrs: true })
export default class ButtonClose extends Vue {
  private translations = Translations;
}
</script>

<style lang="scss">
.button-close:hover .button-close__cross {
  background: white;
}

.button-close {
  position: relative;
  flex-shrink: 0;
  background: white;
  border-radius: 50%;
  border: 3px solid #ef0244;
  font-size: 0;
  min-width: 30px;
  min-height: 30px;
  width: 2.3vw;
  height: 2.3vw;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background: #ef0244;
  }

  &__cross {
    display: inline-block;
    background: #ef0244;
    width: 65%;
    height: 65%;
    position: absolute;
    font-size: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }

  &__label {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
}
</style>
