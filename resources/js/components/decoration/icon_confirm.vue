<template>
  <div ref="container" v-bind:class="{'attached-icon' : attachedIcon}" class="icon-container icon-correct-value">
    <div class="confirmation-icon-bird"></div>
  </div>
</template>

<script>
	export default {
        name: 'icon-confirm',

        props : {
            aditionalClasses : {
                required : false,
                type : Object,
                default : undefined 
             },

             attachedIcon : {
                required : false,
                type : Boolean,
                default : false
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

@import '~sasscomponent/icons/icon_confirmation';

.attached-icon{
    position:absolute;
    top:0;
    right:0;
    transform:translate(50%,-50%);
}

</style>