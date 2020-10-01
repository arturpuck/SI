<template>
  <div class="movie-preview-container">
    <div class="movie-preview-bar">
       <span class="fas fa-video movie-icon"></span>
       <span v-text="movieTitle" class="movie-title"></span>
    </div>
    <img v-bind:src="currentFramePath" v-bind:alt="movieAlt" class="movie-preview-frame">
    <div class="movie-preview-controls-and-decoration">
      <div class="television-decoration red-light"></div>
      <div class="television-decoration green-light"></div>
      <icon-close class="preview-close-icon" title="close_movie_preview" description="close_movie_preview" v-on:click.native="hidePreview"></icon-close>
    </div>
    <input v-model="currentFrame" min=1 max=100 type="range" class="movie-frame-selection" name="movie-frame-selection" id="movie-frame-selection">
    
  </div>  
</template>

<script lang="ts">

import {EmitedMovieData} from '@interfaces/movies/EmitedMovieData';

	export default {
       data()
       {
          return  {
            movieID : 0,
            movieTitle : "",
            currentFrame : 1
          }
       },

       methods : {
           showMoviePreview(movie:EmitedMovieData){
            this.currentFrame = 1;
            this.movieTitle = movie['title'];
            this.movieID = movie['id'];
            alert(this.movieTitle);
          },

          hidePreview(){
            this.$root.$emit('closePreview');
          }
       },

        computed : {
            movieAlt():string{
                return `${this.translator.translate('movie_frame')} : ${this.movieTitle}`;
          } ,

          currentFramePath():string{
            return `/images/movies/preview/${this.movieID}/${this.movieID} ${String(this.currentFrame).padStart(3,'0')}.jpg`;
        }
       },
        
        mounted(){
            this.$root.$on('showPreview', this.showMoviePreview);
            this.translator = this.$root.translator;
        }
    }
        
</script>

<style lang="scss" scoped>
@import '~sass/fonts';

 .movie-preview-container{
     position:absolute;
     display:inline-block;
     top:50%;
     left:50%;
     transform:translate(-50%,-50%);
     max-width: 90%;
     box-shadow: 2px 2px 2px 2px black;
     background: linear-gradient(#080808, #0e0e0e);
     border-radius: 1vw;
     overflow: hidden;
     padding:0 2vw 1vw;
     border: 1px solid #2b2929;
 }

 .movie-preview-frame{
   display:block;
   width:100%;
   height:auto;
   border-radius: 1vw
 }

 .movie-title{
    @include responsive-font();
    overflow:hidden;
    white-space: nowrap;
    color:white;
 }

 .movie-preview-bar{
    padding: 0.5vw 0;
 }

.television-decoration{
   margin-left:5px;
   min-width: 20px;
   min-height: 20px;
   width: 2vw;
   height: 2vw;
 }

 .preview-close-icon{
   min-width: 25px;
   min-height: 25px;
   width: 2.1vw;
   height: 2.1vw;
 }

 .television-decoration{
   border-radius:50%;
 }

 .red-light{
   background:linear-gradient(red, crimson);
 }

 .green-light{
    background: linear-gradient(#2af92a, #054006);
 }

 .preview-close-icon{
   margin-left:auto;
 }

 .movie-icon{
   color:white;
   margin-right:8px;
 }

 .movie-frame-selection{
   display: block;
   width:100%;
   margin: 0 auto;
   -webkit-appearance: none;
   outline: none;
   height: 2vh;
 }
  .movie-frame-selection::-webkit-slider-thumb{
    -webkit-appearance: none;
  border: 1px solid #000000;
  height: 3vh;
  width: 5%;
  border-radius: 1vh;
  background: rgb(6, 163, 6);
  cursor: pointer;
  margin-top: -0.5vh; 
  margin-bottom: -0.5vh;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
   }

   .movie-frame-selection::-webkit-slider-runnable-track{
     background: black;
   }

   .movie-preview-controls-and-decoration{
     display:flex;
     flex-wrap:nowrap;
     align-items: center;
     padding: 1vw 0;
   }


</style>