<template>
  <div ref="container" v-bind:class="{'attached-icon' : attachedIcon}" class="icon-container icon-incorrect-value">
    <div  class="white-bar"></div>
 </div>
</template>

<script>
	export default {
        name: 'icon-stop',

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

.icon-container{
    border-radius: 50%;
    z-index:2;
    width: 2.1vw;
    height: 2.1vw;
    min-width: 30px; 
    min-height: 30px;
    font-size: 0;
}

.icon-incorrect-value
{
    background: red;
}

.white-bar
{
    background:white;
    height: 100%;
    clip-path: polygon(13% 34%, 87% 34%, 87% 64%, 13% 64%);
}

.attached-icon{
    position:absolute;
    top:0;
    right:0;
    transform:translate(50%,-50%);
}

</style>