<template>
<div class="movies-container">
  <div v-show="fetchingInProgress" class="shadow-container">
    <expect-circle v-bind:label="expectCircleLabel"></expect-circle>
  </div>
   <movie-box v-for="movie in movies"
     v-bind:key="movie.id"
     v-bind:duration="movie.duration"
     v-bind:id="movie.id"
     v-bind:movie-description="movie.description">
   </movie-box>
</div>
</template>

<script>


	export default {
        name: 'movie-set',

        data(){
           return {
              fetchingInProgress : true
           };
        },


        methods : {

          async fetchMovies(page = 1){

               const requestData = {
                  method : 'GET',
                  headers : {
                     'X-CSRF-TOKEN' : this.csrfToken
                  }
               };

               this.showExpectationDecoration();
               const response = await fetch('/user/profile/settings/other/change', requestData);
          },

          showExpectationDecoration(){
            this.fetchingInProgress = true;
          },

          hideExpectationDecoration(){
            this.fetchingInProgress = false;
          }
            
        },

        props : {
           expectationLabel : {
             required : false,
             type : String,
             default : "fetching_movies"
           }
        },

        computed : {
           expectCircleLabel(){
              const root = this.$root;
              return root.translator.translate(this.expectationLabel);
           }
        },

        created(){
           this.csrfToken = document.getElementById("csrf-token").content;  
        }
    }
        
</script>

<style lang="scss" scoped>

@import '~sasscomponent/movies/movies_container';
@import '~sass/shadow_container';
 
</style>