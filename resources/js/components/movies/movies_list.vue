<template>
    <div>
      <ul class="movies-container">
        <movie-box v-for="movie in movies" v-bind:key="movie.id" 
         v-bind:title="movie.title"
         v-bind:id="movie.id"
         v-bind:views="movie.views"
         v-bind:is-translated-to-polish="Boolean(movie.is_translated_to_polish)"
         v-bind:pornstars="extractPornstars(movie.pornstars)"
         v-bind:duration="movie.duration"></movie-box>
      </ul>
    </div>
</template>

<script lang="ts">

import {Vue, Component, Prop} from 'vue-property-decorator';
import Translator from '@jsmodules/translator.js';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import {MoviesListResponse} from '@interfaces/movies/MoviesListResponse.ts';
import {MovieBasicData} from '@interfaces/movies/MovieBasicData.ts';
import {BasicPornstarData} from '@interfaces/pornstars/BasicPornstarData.ts';

@Component({components : {MovieBox}})
	export default class MoviesList extends Vue{

      @Prop({
            type: Object,
            required: false,
            default : undefined
        }) readonly initialMoviesData: MoviesListResponse;

        @Prop({
            type: Number,
            required: false,
            default : undefined
        }) readonly initialTotalMovies: number;

         @Prop({
            type: Number,
            required: false,
            default : 100
        }) readonly moviesPerPage: number;

        private movies : MovieBasicData[] = [];
        private totalMovies : number = undefined;
        private ammountOfSubPages : number = 0;

        created(){

            if(this.initialMoviesData){
               this.movies = this.initialMoviesData.movies;
            }

            if(this.initialMoviesData){
                this.totalMovies = this.initialTotalMovies;
            }

            this.$root.$on('updateMoviesList',this.updateMoviesList)
            
        }

        updateMoviesList(moviesData : MoviesListResponse):void{
            this.totalMovies = moviesData.totalMovies;
            this.movies = moviesData.movies;
            this.ammountOfSubPages = Math.ceil(this.totalMovies / this.moviesPerPage);
        }

        extractPornstars(pornstarsList : BasicPornstarData[]) : string[] | string{

            if(pornstarsList.length > 0){
              let parsedPornstarslist:string[] = [];
              
              pornstarsList.forEach(pornstar => {
                 parsedPornstarslist.push(pornstar.nickname);
              });

              return parsedPornstarslist;

            }else{
                return '';
            }
             

             
        }
       
    }       
</script>

<style lang="scss">

  @import '~sasscomponent/movies/movies_container';


</style>