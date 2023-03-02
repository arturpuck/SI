<template>
  <div class="textarea-combo-container">
    <label
      for="textarea-combo-message"
      v-bind:class="{ 'phantom-label': phantomLabel }"
      class="message-label"
      ><slot></slot
    ></label>
    <div class="textarea-wrapper">
      <icon-stop
        v-bind:attached-icon="true"
        v-if="iconErrorCanBeDisplayed"
        v-show="displayIconError"
      />
      <icon-confirm
        v-bind:attached-icon="true"
        v-if="iconConfirmationCanBeDisplayed"
        v-show="displayIconConfirmation"
      />
      <textarea
        v-on:blur="emitBlur"
        v-bind:max="maxCharacters"
        v-bind:placeholder="placeholderText"
        v-on:input="userEditedTextarea"
        :required="inputIsRequired"
        id="textarea-combo-message"
        v-bind:name="textareaName"
        v-bind:rows="rowsNumber"
        v-bind:value="modelMediator"
        v-bind:class="{
          'incorrect-value': displayRedBorder,
          'correct-value': displayGreenBorder,
        }"
        class="textarea-combo-message"
      ></textarea>
      <div
        v-if="errorMessageBoxAvailable"
        v-text="errorMessage"
        class="error-message-box"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import ComboInputBasicFunctionality from "@mixins/components/comboInputs/comboInputBasicFunctionality";
import IconStop from "@jscomponents-decoration/icon_stop.vue";
import IconConfirm from "@jscomponents-decoration/icon_confirm.vue";

export default {
  name: "textarea-combo",

  mixins: [ComboInputBasicFunctionality],

  emits: ["blur"],

  components: {
    IconStop,
    IconConfirm,
  },

  props: {
    initialValue: {
      type: String,
      required: false,
      default: "",
    },

    textareaName: {
      type: String,
      required: false,
      default: "textarea_combo",
    },

    errorIconAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    confirmationIconAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    redBorderAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    greenBorderAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    initialOk: {
      type: Boolean,
      required: false,
      default: undefined,
    },

    completeErrorDisplayAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    completeConfirmationDisplayAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    completeValidationDisplayAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    errorMessageBoxAvailable: {
      type: Boolean,
      required: false,
      default: false,
    },

    initialErrorText: {
      type: String,
      required: false,
      default: undefined,
    },

    placeholderText: {
      type: String,
      required: false,
      default: "",
    },

    inputIsRequired: {
      type: Boolean,
      required: false,
      default: false,
    },

    maxCharacters: {
      type: Number,
      required: false,
      default: undefined,
    },

    rowsNumber: {
      type: Number,
      required: false,
      default: 6,
    },

    phantomLabel: {
      type: Boolean,
      required: false,
      default: false,
    },

    uniqueId: {
      type: String,
      required: false,
      default: "",
    },

    modelValue: {
      type: String,
      required: false,
      default: "",
    },
  },

  data() {
    return {
      valueOK: null,
      errorMessage: "",
      iconErrorCanBeDisplayed: false,
      iconConfirmationCanBeDisplayed: false,
      redBorderCanBeDisplayed: false,
      greenBorderCanBeDisplayed: false,
      modelMediator: "",
    };
  },

  watch: {
    modelValue(newValue) {
      this.modelMediator = newValue;
    },
  },

  methods: {
    emitBlur() {
      this.$emit("blur", this.modelMediator);
    },

    userEditedTextarea(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },

  computed: {
    displayIconError() {
      return this.iconErrorCanBeDisplayed && this.valueOK === false;
    },

    displayRedBorder() {
      return this.redBorderCanBeDisplayed && this.valueOK === false;
    },

    displayIconConfirmation() {
      return this.iconConfirmationCanBeDisplayed && this.valueOK === true;
    },

    displayGreenBorder() {
      return this.greenBorderCanBeDisplayed && this.valueOK === true;
    },
  },

  created() {
    this.modelMediator = this.initialValue || this.modelValue;
    this.errorMessage = this.initialErrorText;

    this.iconErrorCanBeDisplayed =
      this.errorIconAvailable ||
      this.completeErrorDisplayAvailable ||
      this.completeValidationDisplayAvailable;

    this.iconConfirmationCanBeDisplayed =
      this.confirmationIconAvailable ||
      this.completeConfirmationDisplayAvailable ||
      this.completeValidationDisplayAvailable;

    this.redBorderCanBeDisplayed =
      this.redBorderAvailable ||
      this.completeErrorDisplayAvailable ||
      this.completeValidationDisplayAvailable;

    this.greenBorderCanBeDisplayed =
      this.greenBorderAvailable ||
      this.completeConfirmationDisplayAvailable ||
      this.completeValidationDisplayAvailable;
    this.valueOK = this.initialOk;
  },

  mounted() {
    //@ts-ignore
    this.attachEventListeners();
  },
};
</script>

<style lang="scss">
@import "~sass/error_message_box";
@import "~sass/fonts";

.textarea-wrapper {
  position: relative;
}

.message-label {
  text-align: center;
  color: white;
  display: block;
  padding: 3px 0px;
  @include responsive-font(1.4vw, 20px);
}

.phantom-label {
  position: absolute;
  top: -9999px;
  left: 0;
}

.textarea-combo-container {
  width: 95%;
  margin: 10px auto;
}

.textarea-combo-message {
  width: 100%;
  display: block;
  border-radius: 8px;
  background: #242229;
  color: white;
  border: 1px solid #4a4646;
  resize: none;
  color: white;
  @include responsive-font;
  &:focus {
    outline: none;
    border: 1px solid #6e0d1a;
  }
}

.incorrect-value {
  border: 1px solid red;
}

.correct-value {
  border: 1px solid green;
}
</style>