<template>
  <div
    v-on:click="updateModel"
    role="checkbox"
    v-bind:aria-checked="checkboxIsChecked"
    class="labeled-checkbox-container"
  >
    <input type="hidden" v-if="checkboxIsChecked" v-bind:name="name" />
    <div
      v-bind:class="{ 'checked-outer-decoration': checkboxIsChecked }"
      class="checkbox-decoration"
    >
      <div
        v-bind:class="{ 'checked-mark': checkboxIsChecked }"
        class="check-mark"
      ></div>
    </div>
    <span class="labeled-checkbox-description">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "labeled-checkbox",

  data() {
    return {
      checkboxIsChecked: false,
    };
  },

  props: {
    name: {
      type: String,
      required: false,
      default: "labeled-checkbox",
    },

    modelValue: {
      required: false,
      default: false,
    },

    checkboxValue: {
      required: false,
      default: 1,
    },
  },

  methods: {
    updateModel() {
      this.checkboxIsChecked = !this.checkboxIsChecked;
      this.$emit("update:modelValue", this.checkboxIsChecked);
    },
  },

  watch : {
    modelValue() {
      this.checkboxIsChecked = this.modelValue;
    }
  },

  mounted() {
    this.checkboxIsChecked = this.modelValue;
  }
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.labeled-checkbox-container {
  display: inline-flex;
  align-items: center;
  @include responsive-font(1vw, 16px);
  cursor: pointer;
}

.checkbox-decoration {
  width: 1.3em;
  height: 1.3em;
  border-radius: 4px;
  background: white;
  min-width: 20px;
  min-height: 20px;
}

.check-mark {
  clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
  background: white;
  display: none;
  width: 100%;
  height: 100%;
}

.checked-outer-decoration {
  background: rgb(240, 6, 123);
}

.checked-mark {
  display: block;
}

.labeled-checkbox-description {
  color: white;
  margin-left: 5px;
}
</style>
