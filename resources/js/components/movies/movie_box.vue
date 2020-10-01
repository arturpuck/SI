<template>
<div class="movie-box">
    <a v-bind:href="movieURL" v-bind:style="{backgroundImage : mainImageURL}" class="movie-main-image">
        <icon-polish-flag v-if="isTranslatedToPolish" class="movie-translation-notification"></icon-polish-flag>
        <time v-text="duration" class="movie-duration"></time>
    </a>
    <div class="movie-data">
      <a v-bind:href="movieURL" v-text="title" class="movie-description"></a>
      <div class="movie-details-and-controls">
         <span>
             <span class="fas fa-play-circle play-icon"></span>
             <span v-text="viewsTranslated"></span>
             <span v-text="views"></span>
         </span>
         <span v-on:click="showPreview" class="preview-control">
             <span class="fas fa-search-plus magnifier-icon"></span>
             <span v-text="preViewTranslated"></span>
         </span>
      </div>
      <div v-if="aditionalInformation" class="movie-details-and-controls">
         <span v-if="pornstars">
            <span class="fas fa-star star-icon"></span>
            <span v-text="pornstarsListTranslated"></span>
         </span>
      </div>
    </div>
</div>
</template>

<script>
	export default {
        name: 'movie-box',

        data(){
            return {
               translator : null
            }
        },

        methods : {
            showPreview(event){
               this.$root.$emit('showPreview' ,{id:this.id, title:this.title});
           }
        },

        computed : {
           mainImageURL(){
               return `url('/images/movies/main/${this.id}.jpg')`;
           },

           movieURL(){
              return `/film/${this.id}`;
           },

           viewsTranslated(){
               return `${this.translator.translate('views')} : `;
           },

           preViewTranslated(){
              return `${this.translator.translate('preview')}`;
           },

           aditionalInformation(){
               return this.isTranslatedToPolish || this.pornstars;
           },

           pornstarsListTranslated(){
               let pornstars = '';
               this.pornstars.forEach((pornstarNickName)=> pornstars += `${pornstarNickName}, `);
               return pornstars.slice(0,-2);
           },

           
        },

        props : {
            duration : {
              required : true,
              type : String,
            },

            title : {
              required : true,
              type : String,
            },

            id : {
                required : true,
                type : Number
            },

            views : {
                required : true,
                type : Number
            },

            isTranslatedToPolish : {
                required : false,
                type : Boolean,
                default : false
            },

            pornstars : {
                required : false,
                default : ""
            }
        },

        created(){
           this.translator = this.$root.translator;
        }
    }
        
</script>

<style lang="scss" scoped>

@import '~sass/fonts';


.movie-main-image{
    width:280px;
    display: block;
    height:158px;
    text-decoration: none;
    border-radius: 3px;
    position: relative;
    background-size: cover;
    &:hover{
        box-shadow:2px 2px 2px 2px black;
    }
}

.movie-duration{
    display:inline-block;
    position: absolute;
    right:0;
    bottom:0;
    color:white;
    padding: 2px;
    font-family: Aldrich;
    background: #0000005c;
}

.movie-description{
    display:block;
    padding-top: 2px;
    color:white;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
}

.movie-box{
    color:white;
    @include responsive-font(1.2vw,14px);
}

.movie-translation-notification{
    top:0;
    right:0;
    position:absolute;
}

.movie-details-and-controls{
    padding-top:5px;
    display:flex;
    justify-content: space-between;
}

.play-icon, .magnifier-icon{
    color:#960b2e;
}

.star-icon{
    color:gold;
}

.preview-control{
    cursor:pointer;
}

@media(max-width: 870px){
    .movie-main-image{
        width:232px;
        height:120px;
    }
}
 
</style>