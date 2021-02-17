<template>
 <fixed-shadow-container v-show="showPreview">
   <movie-preview></movie-preview>
 </fixed-shadow-container>
</template>

<script lang="ts">

import {Vue, Component, Prop} from 'vue-property-decorator';
import Translator from '@jsmodules/translator.js';
import FixedShadowContainer from '@jscomponents/decoration/fixed_shadow_container.vue';
import MoviePreview from '@jscomponents/movies/movie_preview.vue';


@Component({components : {FixedShadowContainer, MoviePreview}})

	export default class MoviePreviewComplete extends Vue{

        private showPreview : boolean = false;

        showMoviePreview():void{
            this.showPreview = true;
        }

        hideMoviePreview():void{
            this.showPreview = false;
        }
     

        created(){
             this.$root.$on('showPreview', this.showMoviePreview);
             this.$root.$on('closePreview', this.hideMoviePreview)
        }

       
    }       
</script>

<style lang="scss">


</style>