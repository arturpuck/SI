<template>
  <div class="star-rate-all">
    <span v-if="label" v-text="label" class="star-rate-label"></span>
    <div v-on:mouseout="unsetHoverValue" class="star-rate-container">
      <button
        v-for="starNumber in starCount"
        v-bind:key="starNumber"
        v-on:mouseover="setHoverValue(starNumber)"
        v-on:click="valueHasBeenSelected(starNumber)"
        class="star-rate"
        
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 117.1"
          v-bind:class="[getStarColorClassName(starNumber)]"
        >
          <defs>
                <linearGradient xmlns="http://www.w3.org/2000/svg" id="half-gold-star">
                  <stop offset="0%" stop-color="gold"/>
                  <stop offset="50%" stop-color="gold"/>
                  <stop offset="51%" stop-color="white"/>
                  <stop offset="100%" stop-color="white"/>
                </linearGradient>
          </defs>
          <title v-text="starNumber"></title>
          <path
            class="cls-1"
            d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"
          />
        </svg>
      </button>
    </div>
    <div v-if="showNumber" v-text="displayedValue" class="rate-value"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator";

@Options({ name: "StarRating" })
export default class StarRating extends Vue {
  private selectedValue: number = 0;
  private valueOnHover: number = 0;
  private translations = Translator.getPackage("star_rating");

  emits = ["selected"];

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
    const differenceBetweenSelectedValueAndStarIndex =
      primaryValue - starNumber;

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

    return "empty-star";
  }

  created() {
    this.selectedValue = this.initialValue;
    //@ts-ignore
    this.emitter.on(
      `${this.identifier}UpdateRate`,
      (rate: number) =>  this.selectedValue = rate 
    );
  }
}
</script>

<style lang="scss" scoped>
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
  background: transparent;
  border:none;
  color: transparent;
  padding:0;
  @media (max-width: 500px) {
    margin: 0 3px;
  }

  &:hover {
    cursor: pointer;
  }
}

.completly-gold-star-rate {
  fill: #ffd401;
}

.half-gold-star-rate {
  fill: url(#half-gold-star);
}

.st0 {
  clip-path: url(#SVGID_2_);
}
.st1 {
  fill: #ffd401;
}

.empty-star{
  fill: grey;
}
</style>
