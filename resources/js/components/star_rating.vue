<template>
<div class="star-rate-container">
  <div v-for="starNumber in 10" v-bind:key="starNumber" v-bind:class="{'selected-star-rate' : starNumber <= selectedValue}" v-on:click="valueHasBeenSelected(starNumber)" class="star-rate"></div>
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
    
    valueHasBeenSelected(starNumber){
        this.selectedValue = starNumber;
        this.$emit('starRateHasBeenSelected', starNumber);
    }

    mounted(){
        this.selectedValue = this.initialValue;
    }
 
  }
</script>

<style lang="scss">

.star-rate-container{
   padding:1vw;
   display:inline-flex;
   flex-wrap:nowrap;
}

.star-rate{
    width:2vw;
    height:2vw;
    background:white;
    @media(max-width:1200px){
        width:20px;
        height:20px;
    }
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.selected-star-rate{
   background:gold;
}
  
</style>