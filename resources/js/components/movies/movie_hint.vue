<template>
<div id="movie-hint" v-bind:style="positionStyle" class="movie-hint__outer-container">
    <div aria-hidden="true"  class="movie-hint__container">
        <img class="movie-hint__image"  v-bind:src="imageSource" v-bind:alt="movieDescription"/>
        <time v-text="currentTime" class="movie-hint__time"></time>
    </div>
    <div class="movie-hint__decoration"></div>
</div>
</template>

<script lang="ts">
import Config from "@config/paths/movies";

export default {
  name: "movie-hint",

  props : {
      movieId : {
          required : true,
          type : Number
      },

      currentFrame : {
         required : true,
         type : Number
      },

      movieDescription : {
          required : true,
          type : String
      },

      positionCoordinances : {
          required : true,
          type : Object
      },

      currentTime : {
          required : true
      }
  },

  computed : {
      imageSource() : string {
          return `${Config.movieSnapShotsFolder}${this.movieId}/${this.movieId} ${this.parsedCurrentFrame}.jpg`;
      },

      parsedCurrentFrame() : string {
           return String(this.currentFrame).padStart(3,'0');
      },

      positionStyle() {
          const {x, y} = this.positionCoordinances;

          return {
              left : x,
              top : y
          }
      }
  }
};
</script>

<style lang="scss" scoped>

@import "~sass/fonts";

.movie-hint{

    &__outer-container {
        width:min-content;
        position:absolute;
    }

    &__container{
        width:min-content;
        position: relative;
        height:auto;
        border: 2px solid #b71b37;
        overflow: hidden;
        z-index: 4;
        font-size:0;
        border-radius:7px;
        box-shadow: 2px 2px 2px 2px black;
    }

    &__decoration{
        height:30px;
        width:30px;
        transform:translate(-50%,-50%) rotate(45deg); 
        z-index:1;
        background:#b71b37;
        position:absolute;
        top:100%;
        left: 50%;
    }

    &__image{
        min-width:232px;
        width: 10vw;
        z-index:2;
    }

    &__time {
        position: absolute;
        top:100%;
        left:50%;
        transform:translate(-50%, -100%);
        @include responsive-font();
        color:white;
        background : rgba(0,0,0,0.7);
        border-radius: 4px;
        padding:4px;
        z-index:1;
    }
}


</style>
