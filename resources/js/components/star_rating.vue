<template>
<div class="star-rate-all">
  <div class="star-rate-container">
    <div v-for="starNumber in starCount" v-bind:key="starNumber" v-bind:class="[getStarColorClassName(starNumber)]" v-on:click="valueHasBeenSelected(starNumber)" class="star-rate"></div>
  </div>
  <div v-if="showNumber" v-text="selectedValue" class="rate-value"></div>
</div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  
@Component
  export default class StarRating extends Vue {

    private selectedValue = 0;

    @Prop({
            type: Number,
            required: false,
            default:10
        }) readonly starCount: number;

    @Prop({
            type: Number,
            required: false,
            default:0
        }) readonly initialValue: number;

    @Prop({
            type: Boolean,
            required: false,
            default:false
        }) readonly fixedValue: boolean;

    @Prop({
            type: Boolean,
            required: false,
            default:false
        }) readonly showNumber: boolean;
    
    valueHasBeenSelected(starNumber){

      if(!this.fixedValue){
         this.selectedValue = starNumber;
         this.$emit('starRateHasBeenSelected', starNumber);
      }

    }

    getStarColorClassName(starNumber:number):string{
       const differenceBetweenSelectedValueAndStarIndex = this.selectedValue - starNumber;

       if(differenceBetweenSelectedValueAndStarIndex >= 0){
         return 'completly-gold-star-rate';
       }

       if((differenceBetweenSelectedValueAndStarIndex < 0) && (differenceBetweenSelectedValueAndStarIndex >= -0.5)){
         return 'completly-gold-star-rate';
       }

       if((differenceBetweenSelectedValueAndStarIndex < -0.5) && (differenceBetweenSelectedValueAndStarIndex > -1)){
         return 'half-gold-star-rate';
       }

       return '';

    }

    mounted(){
        this.selectedValue = this.initialValue;
    }
 
  }
</script>

<style lang="scss">

@import '~sass/fonts';

.rate-value{
  padding:0 5px 5px;
  text-align:center;
  color:white;
  @include responsive-font(1.4vw,20px);
}

.star-rate-all{
  display:inline-block;
}

.star-rate-container{
   padding:1vw;
   display:inline-flex;
   flex-wrap:nowrap;
}

.star-rate{
    width:2.2vw;
    height:2.2vw;
    margin:0 8px;
    min-width:20px;
    min-height:20px;
    background:white;
    @media(max-width:500px){
        margin:0 3px;
    }
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.completly-gold-star-rate{
   background:gold;
}

.half-gold-star-rate{
   background:linear-gradient(to right,gold 0%, gold 50%, white 50%, white 100%);
}
  
</style>