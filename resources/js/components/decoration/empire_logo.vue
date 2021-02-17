<template>
  <div aria-hidden="true" class="logo-container">
      <span class="fas fa-heartbeat decoration-heart"></span>
      <span aria-hidden="true" v-text="logoDescription" class="logo-description logo-description-long"></span>
      <span aria-hidden="true" v-text="logoDescriptionShort" class="logo-description logo-description-short"></span>
  </div>
</template>

<script>
import Translator from '@jsmodules/translator.js';

	export default {
        name: 'empire-logo',

        data() {
            return {
               logoDescription : "",
               logoDescriptionShort : ""
            }
           
        },

        mounted(){
            this.translator = Translator;
            this.logoDescription = this.translator.translate('sex_empire');
            this.logoDescriptionShort = this.translator.translate('sex_empire_short');
        }
    }
</script>

<style lang="scss" scoped>

@import '~sass/fonts';

.logo-description{
    @include responsive-font(1em,1em);
    color:white;
}

.logo-container{
    display: inline-block;
}

.decoration-heart{
    font-size:1em;
    margin-right:2px;
    color:#eb091c
}

.logo-description-short{
    @media(max-width:550px){
        display:inline;
    }

    @media(min-width:551px){
        display:none;
    }
}

.logo-description-long{
    @media(max-width:550px){
        display:none;
    }

    @media(min-width:551px){
        display:inline;
    }
}

</style>