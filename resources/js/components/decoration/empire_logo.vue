<template>
  <div aria-hidden="true" class="logo-container">
      <span class="fas fa-heartbeat decoration-heart" ></span>
      <span v-text="logoDescription" class="logo-description"></span>
  </div>
</template>

<script>
	export default {
        name: 'empire-logo',

        data() {
            return {
               logoDescription : ""
            }
           
        },

        mounted(){
            this.translator = this.$root.translator;
            this.logoDescription = this.translator.translate('sex_empire');
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

</style>