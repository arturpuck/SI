<template>
<div id="movie-hint" aria-hidden="true" v-bind:style="positionStyle" class="movie-hint__container">
  <img class="movie-hint__image"  v-bind:src="imageSource" v-bind:alt="movieDescription"/>
  <time v-text="currentTime" class="movie-hint__time"></time>
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
              left : `${x}px`,
              top : `${y}px`
          }
      }
  }
};
</script>

<style lang="scss" scoped>

@import "~sass/fonts";

.movie-hint{

    &__container{
        width:min-content;
        position: absolute;
        height:auto;
        border: 1px solid silver;
        z-index: 4;
        font-size:0;
    }

    &__image{
        min-width:232px;
        width: 10vw;
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
    }
}


</style>
