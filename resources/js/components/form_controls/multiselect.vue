<template>
  <div>
    <div v-click-away="hideMenu" class="multiselect">
      <div class="multiselect__label" v-on:click="showMenu">
        <span class="multiselect__caption"><slot></slot></span>
        <icon-add-plus class="add-icon"></icon-add-plus>
      </div>
      <div
        class="multiselect__menu"
        v-bind:class="{ 'multiselect__menu--visible': menuIsVisible }"
      >
        <label v-if="showSearchInput">
          <div
            v-text="searchInputCaption"
            class="multiselect__search-input-caption"
          ></div>
          <input
            v-model="searchPhrase"
            class="multiselect__search-input"
            id=""
            type="search"
          />
        </label>
        <ul class="multiselect__options">
          <li
            v-for="(option, key) in displayedOptions"
            v-bind:key="key"
            class="multiselect__option"
          >
            <labeled-checkbox
              v-on:click="updateModel(key, $event)"
              v-bind:model-value="optionIsChecked(key)"
              v-bind:name="key"
            >
              {{ option }}
            </labeled-checkbox>
          </li>
        </ul>
      </div>
    </div>
    <ul class="multiselect__selected-options-list">
      <li
        v-for="(value, key) in modelValue"
        v-bind:key="key"
        class="multiselect__selected-option"
      >
        {{ options[value] }}
        <button-close
          v-on:click="removeSelectedOption(value)"
          class="button-close--smaller"
        ></button-close>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Translations from "@jsmodules/translations/components/form_controls/multiselect.js";
import IconAddPlus from "@jscomponents/decoration/icons/icon_add_plus.vue";
import LabeledCheckbox from "@jscomponents/form_controls/labeled_checkbox.vue";
import { directive } from "vue3-click-away";
import ButtonClose from "@jscomponents/form_controls/button_close.vue";

export default {
  name: "Multiselect",

  directives: { ClickAway: directive },

  components: { IconAddPlus, LabeledCheckbox, ButtonClose },

  props: {
    showSearchInput: {
      type: Boolean,
      required: false,
      default: false,
    },

    initialOptions: {
      type: Object,
      required: false,
      default: {},
    },

    id: {
      type: String,
      required: false,
      default: "Multiselect",
    },

    searchInputCaption: {
      type: String,
      required: false,
      default: Translations["defaultSearchInputCaption"],
    },

    modelValue: {
      type: Array,
      required: false,
      default: [],
    },
  },

  data() {
    return {
      menuIsVisible: false,
      searchPhrase: "",
      modifiedOptions : null
    };
  },

  methods: {
    showMenu(): void {
      this.menuIsVisible = true;
    },

    hideMenu(): void {
      this.menuIsVisible = false;
    },

    optionIsChecked(key: string): boolean {
      return this.modelValue.includes(key);
    },

    updateModel(value, event): void {
      event.preventDefault();
      const newModelValue = this.modelValue.includes(value)
        ? this.modelValue.filter((selectedOption) => selectedOption != value)
        : this.modelValue.concat([value]);
      this.$emit("update:modelValue", newModelValue);
    },

    removeSelectedOption(value): void {
      const newModelValue = this.modelValue.filter(
        (selectedOption) => selectedOption != value
      );
      this.$emit("update:modelValue", newModelValue);
    },

  },

  computed: {
    displayedOptions() {
      if (this.searchPhrase === "") {
        return this.options;
      }
      const result = {};
      Object.keys(this.options).forEach((key) => {
        let value = String(this.options[key]);
        if (value.includes(this.searchPhrase)) {
          result[key] = this.options[key];
        }
      });
      return result;
    },

    options() {
      return this.modifiedOptions || this.initialOptions;
    }
  },

  mounted() {
    this.emitter.on(`update${this.id}Options`, options => this.modifiedOptions = options);
  }
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/nice_scrollbar";
@import "~sass/custom_inputs_font_size";

@mixin naked-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.add-icon {
  margin-left:5px;
}

.multiselect {
  position: relative;
  padding: 4px;
  border-radius: 7px;
  background: #242229;
  border: 1px solid #4a4646;
  cursor: pointer;
  @include responsive-font();

  &__search-input-caption {
    text-align: center;
    color: white;
  }

  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include custom-input-font-size();
  }

  &__caption {
    color: white;
  }

  &__options {
    @include naked-list();
  }

  &__option {
    margin: 5px 0;
  }

  &__menu {
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    overflow-y: auto;
    z-index: 5;
    padding: 0;
    background: black;
    max-height: 0;

    &--visible {
      max-height: 25vh;
      padding: 0.5vw;
    }
  }

  &__search-input {
    background: #f7ecf0;
    border: 2px solid transparent;
    outline: none;
    border-radius: 3px;
    width: 100%;
    @include responsive-font();
    margin: 5px 0;
    &:focus {
      border: none;
      border: 2px solid crimson;
      outline: none;
    }
  }

  &__selected-options-list {
    @include naked-list();
    @include responsive-font(1.1vw, 13px);
    max-height: 8em;
    overflow: auto;
  }

  &__selected-option {
    display: inline-block;
    background: linear-gradient(#12d012, #265005);
    border-radius: 3px;
    padding: 2px 4px;
    margin: 4px 2px;
    color: white;
  }
}

.button-close--smaller {
  min-width: 20px;
  min-height: 20px;
  width: 1.5vw;
  height: 1.5vw;
  vertical-align: middle;
  margin-left: 3px;
}

@include nice-scrollbar(".multiselect__menu");
@include nice-scrollbar(".multiselect__selected-options-list");
</style>
