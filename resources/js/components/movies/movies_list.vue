<template>
<ul class="movies-list">
  <movie-box></movie-box>
</ul>
</template>

<script lang="ts">
  
  import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator.js';
  import MovieBox from '@jscomponents/movies/movie_box.vue';

  @Component({ components : {
     MovieBox
 }})

  export default class MoviesList extends Vue {

    @Prop({
            type: Array,
            required: true,
        }) readonly pornstarMovies;

    private translations: Object = Translator.getPackage('pornstars_list');

   
  }
</script>

<style lang="scss">
 @import '~sass/fonts';

</style>