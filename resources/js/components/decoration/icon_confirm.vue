<template>
  <div ref="container" class="icon-container icon-correct-value">
    <div class="confirmation-icon-bird"></div>
  </div>
</template>

<script>
	export default {
        name: 'icon-ok',

        props : {
            aditionalClasses : {
                required : false,
                type : Object,
                default : undefined 
             }
        },

         mounted(){
            if(this.aditionalClasses){
                Object.keys(this.aditionalClasses).forEach((key) => this.$refs[key].classList.add(this.aditionalClasses[key]));
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '../../../sass/components/icons/icon_confirmation';

</style>