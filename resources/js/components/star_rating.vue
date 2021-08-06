<template>
  <div class="star-rate-all">
    <span v-if="label" v-text="label" class="star-rate-label"></span>
    <div v-on:mouseout="unsetHoverValue" class="star-rate-container">
      <button
        v-for="starNumber in starCount"
        v-bind:key="starNumber"
        v-on:mouseover="setHoverValue(starNumber)"
        v-bind:class="[getStarColorClassName(starNumber)]"
        v-on:click="valueHasBeenSelected(starNumber)"
        class="star-rate"
        v-text="starNumber"
      ></button>
    </div>
    <div v-if="showNumber" v-text="displayedValue" class="rate-value"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator";
import EventBus from "@jsmodules/event_bus.js";

@Options({ name: "StarRating" })
export default class StarRating extends Vue {
  private selectedValue: number = 0;
  private valueOnHover: number = 0;
  private translations = Translator.getPackage("star_rating");

  @Prop({
    type: Number,
    required: false,
    default: 10,
  })
  readonly starCount: number;

  @Prop({
    type: Number,
    required: false,
    default: undefined,
  })
  readonly ratedElementId: number;

  @Prop({
    type: Number,
    required: false,
    default: 0,
  })
  readonly initialValue: number;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  readonly fixedValue: boolean;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  readonly showNumber: boolean;

  @Prop({
    type: String,
    required: false,
    default: undefined,
  })
  readonly label: string;

  @Prop({
    type: String,
    required: false,
    default: "starRate",
  })
  readonly identifier: string;

  setHoverValue(starNumber: number) {
    if (!this.fixedValue) {
      this.valueOnHover = starNumber;
    }
  }

  unsetHoverValue() {
    this.valueOnHover = 0;
  }

  get displayedValue(): string | number {
    if (!this.valueOnHover && !this.selectedValue) {
      return this.translations["no_selected_value"];
    }

    return this.valueOnHover == 0 ? this.selectedValue : this.valueOnHover;
  }

  valueHasBeenSelected(starNumber) {
    if (!this.fixedValue) {
      this.selectedValue = starNumber;
      this.valueOnHover = starNumber;
      this.$emit("selected", {
        rate: starNumber,
        elementID: this.ratedElementId,
      });
    }
  }

  getStarColorClassName(starNumber: number): string {
    const primaryValue = this.valueOnHover || this.selectedValue;
    const differenceBetweenSelectedValueAndStarIndex = primaryValue - starNumber;

    if (differenceBetweenSelectedValueAndStarIndex >= 0) {
      return "completly-gold-star-rate";
    }

    if (
      differenceBetweenSelectedValueAndStarIndex < 0 &&
      differenceBetweenSelectedValueAndStarIndex >= -0.5
    ) {
      return "completly-gold-star-rate";
    }

    if (
      differenceBetweenSelectedValueAndStarIndex < -0.5 &&
      differenceBetweenSelectedValueAndStarIndex > -1
    ) {
      return "half-gold-star-rate";
    }

    return "";
  }

  mounted() {
    this.selectedValue = this.initialValue;
    EventBus.$on(`${this.identifier}UpdateRate`, (rate: number) => this.selectedValue = rate);
   // this.$root.$on(
    //  `${this.identifier}UpdateRate`,
  //    (rate: number) => (this.selectedValue = rate));
  }
}
</script>

<style lang="scss">
@import "~sass/fonts";

.star-rate-label {
  display: block;
  text-align: center;
  color: white;
  @include responsive-font();
}

.rate-value {
  padding: 0 5px 5px;
  text-align: center;
  color: white;
  @include responsive-font(1.4vw, 19px);
}

.star-rate-all {
  display: inline-block;
}

.star-rate-container {
  padding: 1vw;
  display: inline-flex;
  flex-wrap: nowrap;
}

.star-rate {
  width: 2.2vw;
  height: 2.2vw;
  margin: 0 8px;
  min-width: 20px;
  min-height: 20px;
  background: white;
  color: transparent;
  @media (max-width: 500px) {
    margin: 0 3px;
  }
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  &:hover {
    cursor: pointer;
  }
}

.completly-gold-star-rate {
  background: gold;
}

.half-gold-star-rate {
  background: linear-gradient(to right, gold 0%, gold 50%, white 50%, white 100%);
}
</style>
