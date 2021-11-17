<template>
  <img id="movie-hint" class="movie-hint" v-bind:style="positionStyle" v-bind:src="imageSource" v-bind:alt="movieDescription"/>
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

.movie-hint{
    position: absolute;
    min-width:150px;
    width: 10vw;
    height:auto;
    border: 1px solid silver;
    z-index: 4;
}

</style>
